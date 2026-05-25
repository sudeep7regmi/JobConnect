import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { useEffect } from "react";
import { useState } from "react";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;
        if (!token) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
        userId: number;
        userEmail: string;
     };

    const userId = decoded.userId;

    // Get Data from db
    const [ jobs, applications,user] = await Promise.all([
      prisma.job.count({   //bottle neck (map)
        where: { recruiterId: userId },
      }),
      prisma.application.count({
        where: { userId },
      }),
      prisma.user.findUnique({
        where: { id: userId },
      }),
    ]);

    return NextResponse.json({
      user,
      jobs,
      applications,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: { error },
      },
      { status: 404 }
    );
  }
}
