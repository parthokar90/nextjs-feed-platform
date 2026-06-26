"use client";

import React from "react";
import Link from "next/link";

export default function LoginPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Log In</h2>

      {/* Email Input */}
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full text-sm text-gray-700 bg-gray-50 rounded-lg p-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
        />
      </div>

      {/* Password Input */}
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <label className="block text-xs font-semibold text-gray-600 m-0">Password</label>
          <a href="#" className="text-xs font-medium text-blue-600 hover:underline">Forgot Password?</a>
        </div>
        <input
          type="password"
          placeholder="Enter your password"
          required
          className="w-full text-sm text-gray-700 bg-gray-50 rounded-lg p-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
        />
      </div>

      {/* Remember Me */}
      <div className="flex items-center">
        <input
          id="remember-me"
          type="checkbox"
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
        />
        <label htmlFor="remember-me" className="ml-2 text-xs font-medium text-gray-500 cursor-pointer select-none">
          Remember me on this device
        </label>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg border-none transition-colors cursor-pointer shadow-sm mt-2"
      >
        Log In
      </button>

      {/* Redirect to Register */}
      <p className="text-center text-xs text-gray-500 mt-4 m-0">
        Don't have an account?{" "}
        <Link href="/register" className="text-blue-600 font-semibold no-underline hover:underline">
          Sign Up
        </Link>
      </p>
    </form>
  );
}