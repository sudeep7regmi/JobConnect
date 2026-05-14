"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        console.log("Registration successful:", data);
        router.push("/login");
      } else {
        alert("User already exist with this email or invalid input");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-yellow-900 border-oval-2 rounded-2xl overscroll-x-auto ">
      <h1 className="text-2xl font-bold mb-6">Register</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white text-black p-6 rounded shadow-md w-full max-w-sm"
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="enter your name"
          className="w-full p-2 mb-4 border rounded"
        />
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
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-950 cursor-pointer"
          >
            Register
          </button>
          <Link href="/login" className="text-sm text-blue-500 hover:underline">
            <p className="underline hover:text-blue-500 text-base">Login</p>
          </Link>
        </div>
      </form>
    </div>
  );
}
