"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

// 1. Define strict interfaces for the API structures
interface RegisterResponse {
  success: boolean;
  message?: string;
  user?: {
    id: string;
    name: string;
    email: string;
  };
}

export default function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 2. Strongly type the API request function
  const registerApiCall = async (): Promise<RegisterResponse> => {
    // Added leading slash to fix the absolute pathing issue
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "User already exists or invalid input");
    }

    return res.json();
  };

  // 3. Set up the TanStack Mutation: <ResponseData, ErrorType, VariablesPassed>
  const registerMutation = useMutation<RegisterResponse, Error, void>({
    mutationFn: registerApiCall,
    onSuccess: (data) => {
      console.log("Registration successful:", data);
      router.push("/login");
    },
    onError: (error) => {
      // Custom handler eliminates messy alert windows
      console.error("Error during registration:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerMutation.mutate();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Create an account</h1>
          <p className="mt-1 text-sm text-gray-500">Sign up to get started</p>
        </div>

        {/* Clean, dynamic error component powered by TanStack flags */}
        {registerMutation.isError && (
          <div className="mb-5 p-3 text-sm rounded-lg border bg-red-50 border-red-200 text-red-700 text-center">
            {registerMutation.error.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="w-full p-2.5 rounded-xl border border-gray-300 text-sm focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
              className="w-full p-2.5 rounded-xl border border-gray-300 text-sm focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full p-2.5 rounded-xl border border-gray-300 text-sm focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none"
            />
          </div>

          <div className="flex items-center justify-between gap-4 pt-2">
            <button
              type="submit"
              disabled={registerMutation.isPending}
              className="w-full flex justify-center items-center rounded-xl bg-black p-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-950 transition-colors cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {registerMutation.isPending ? "Creating..." : "Get Started"}
            </button>
            
            <Link href="/login" className="text-sm text-blue-600 hover:underline shrink-0 font-medium">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}