import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const token = req.headers.get("cookie")?.split("token=")[1];

    if (!token) {
      return NextResponse.json(
        {
          error: "unauthorized",
        },
        { status: 401 }
      );
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: number;
    };

    const recruiterId = decoded.userId;

    const body = await req.json();

    const { title, company, location, type } = body;

    const job = await prisma.job.create({
      data: {
        title,
        company,
        location,
        type,
        recruiterId,
      },
    });

    return NextResponse.json(job);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "something went wrong" },
      { status: 501 }
    );
  }
}
