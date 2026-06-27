"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

// 1. Define strict interfaces for our API structures
interface LoginResponse {
  success: boolean;
  token?: string;
  user?: {
    id: string;
    email: string;
  };
}

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 2. Strongly type the API call function
  const loginApiCall = async (): Promise<LoginResponse> => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      // Throwing a standard Error object with the backend message
      throw new Error(errorData.message || "Invalid credentials");
    }

    return res.json();
  };

  // 3. Provide types to useMutation: <DataReturned, ErrorType, VariablesPassed>
  const loginMutation = useMutation<LoginResponse, Error, void>({
    mutationFn: loginApiCall,
    onSuccess: (data) => {
      console.log(data);
      // TypeScript now knows exactly what shape 'data' is!
      alert("Login successful!");
      router.push("/dashboard");
    },
    onError: (error) => {
      // TypeScript now guarantees 'error' is an instance of Error
      alert(error.message);
    },
  });

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutation.mutate();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Welcome back
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Sign in to access your dashboard
          </p>
        </div>

        {/* loginMutation.error is safely inferred as an Error object */}
        {loginMutation.isError && (
          <div className="mb-5 p-3 text-sm rounded-lg border bg-red-50 border-red-200 text-red-700 text-center">
            {loginMutation.error.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full p-2.5 rounded-xl border border-gray-300 text-sm focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loginMutation.isPending}
            className="w-full mt-2 flex justify-center items-center rounded-xl bg-green-800 p-3 text-sm font-semibold text-white shadow-sm hover:bg-green-900 transition-colors cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {loginMutation.isPending ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm border-t border-gray-100 pt-4">
          <span className="text-gray-500">Don&apos;t have an account? </span>
          <Link
            href="/register"
            className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
          >
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}
