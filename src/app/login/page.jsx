"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@example.com" && password === "123456") {
      document.cookie = "auth=true; path=/";
      router.push("/items");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/20 via-pink-500/10 to-blue-500/20 blur-3xl" />

      <div className="w-full max-w-md mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-black/60 backdrop-blur p-8">
          {/* Header */}
          <div className="text-center">
            <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/10 text-white/80">
              Welcome Back
            </span>

            <h1 className="text-3xl font-bold text-white">
              Login to
              <span className="block bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Your Account
              </span>
            </h1>

            <p className="mt-4 text-sm text-white/70">
              Access your orders, wishlist, and more.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="mt-10 space-y-6">
            {/* Email */}
            <div>
              <label className="text-sm text-white/70">Email</label>
              <div className="mt-2 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                <input
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg bg-white/10 border border-white/10 pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-white/70">Password</label>
              <div className="mt-2 relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                <input
                  type="password"
                  placeholder="123456"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg bg-white/10 border border-white/10 pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400"
                />
              </div>
            </div>


            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-white text-black py-3 font-medium hover:bg-gray-200 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
