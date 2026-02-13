import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import { verifyPassword } from "../../../lib/auth";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

    const ok = verifyPassword(password, user.password);
    if (!ok) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

    const res = NextResponse.json({ id: user.id, email: user.email, name: user.name, nickname: user.nickname });
    res.cookies.set("session", Buffer.from(String(user.id)).toString("base64"), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });
    return res;
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Server error" }, { status: 500 });
  }
}
