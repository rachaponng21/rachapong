"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name, nickname }),
      });
      if (!res.ok) {
        const j = await res.json();
        setError(j?.error || "Register failed");
        return;
      }
      router.push("/");
    } catch (err) {
      setError("Network error");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="card w-full max-w-md shadow-lg">
        <div className="card-body bg-black text-white">
          <h2 className="card-title text-2xl text-red-500">สมัครสมาชิก</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">ชื่อ</span>
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="input input-bordered w-full bg-white text-black"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">ชื่อเล่น</span>
              </label>
              <input
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                required
                className="input input-bordered w-full bg-white text-black"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">อีเมล</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input input-bordered w-full bg-white text-black"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">รหัสผ่าน</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input input-bordered w-full bg-white text-black"
              />
            </div>
            {error && <div className="text-red-300">{error}</div>}
            <div className="flex items-center justify-between">
              <button className="btn btn-primary">สมัคร</button>
              <a href="/" className="btn btn-ghost text-red-400">กลับไปหน้าเข้าสู่ระบบ</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
