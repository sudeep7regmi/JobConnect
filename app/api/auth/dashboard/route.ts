import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

export async function GET(req:Request){
    try {
        const token = req.headers.get("cookie")?.split("token=")[1];
        if (!token){
            return NextResponse.json(
                {error: "unauthorized"},
                {status : 401}
            );
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET!
        ) as {id: number};

        const userId = decoded.id;

        // Get Data from db 
        const [jobs,applications] = await Promise.all([
            prisma.job.count({
                where: {recruiterId: userId},
            }),
            prisma.application.count({
                where: {userId},
            }),
        ]);

        return NextResponse.json({
            jobs,
            applications,
        });
    }catch(error){
            return NextResponse.json(
                {
                    error: "Invalid Token"
                },
                {status: 404}
            );
        }
    }
