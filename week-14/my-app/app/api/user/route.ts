import { NextRequest, NextResponse } from "next/server";

export function GET() {
  return Response.json({
    email: "princekumar1234@gmail.com",
    name: "Prince kumar",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body)
  return NextResponse.json(body);
}
