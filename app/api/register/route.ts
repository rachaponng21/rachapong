import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import { hashPassword } from "../../../lib/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, name, nickname } = body;
    if (!email || !password || !nickname) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) return NextResponse.json({ error: "Email already in use" }, { status: 409 });

    const nickExists = await prisma.user.findUnique({ where: { nickname } });
    if (nickExists) return NextResponse.json({ error: "Nickname already in use" }, { status: 409 });

    const hashed = hashPassword(password);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashed,
        name: name || null,
        nickname,
      },
    });

    return NextResponse.json({ id: user.id, email: user.email, name: user.name, nickname: user.nickname }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Server error" }, { status: 500 });
  }
}
