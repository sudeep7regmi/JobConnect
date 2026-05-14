"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("login sucessfull");
        router.push("/dashboard");
      } else {
        console.error("login failed:", data);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">login</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white text-black p-6 rounded shadow-md w-full max-w-sm"
      >
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="name@example.com"
          className="w-full p-2 mb-4 border rounded"
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="********"
          className="w-full p-2 mb-4 border rounded"
        />
        <div className="flex items-center justify-between mb-4 gap-4">
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white p-2 rounded hover:bg-blue-950 cursor-pointer"
          >
            Login
          </button>{" "}
          <Link href="/register" className="text-sm text-blue-500 hover:underline">
          <p className="underline hover:text-blue-500 text-base">Register</p>
          </Link>
        </div>
      </form>
    </div>
  );
}
