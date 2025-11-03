import { PrismaClient } from "@/app/generated/prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient({ log: ["query"] });

export async function GET() {
  try {
    const user = await prisma.user.findFirst({});
    console.log(user?.id);
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const { password, username } = await req.json();

    if (!password || !username) {
      return NextResponse.json("password or username fields are required!");
    }
    const user = await prisma.user.create({
      data: {
        password,
        username,
      },
    });
    console.log(user.id);

    return NextResponse.json({
      message: "User Created Successfully!",
    });
  } catch (error) {
    console.log(error);
  }
}
