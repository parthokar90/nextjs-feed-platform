"use client";

import React, { useActionState } from "react";
import Link from "next/link";
import { loginUser } from "@/app/actions/auth/login";

export default function LoginPage() {

  const [state, formAction, isPending] = useActionState(loginUser, null);

  return (
    <form action={formAction} className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Log In</h2>

      {/* Render global error or success alerts */}
      {state && !state.success && (
        <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg border border-red-100">
          {state.message}
        </div>
      )}
      {state && state.success && (
        <div className="p-3 text-sm text-green-600 bg-green-50 rounded-lg border border-green-100">
          {state.message}
        </div>
      )}

      {/* Email Input */}
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          defaultValue={state?.inputs?.email || ""}
          className="w-full text-sm text-gray-700 bg-gray-50 rounded-lg p-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
        />
        {/* Specific backend validation error for first_name */}
        {state?.errors?.email && (
          <p className="text-xs text-red-500 mt-1">{state.errors.email[0]}</p>
        )}
      </div>

      {/* Password Input */}
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <label className="block text-xs font-semibold text-gray-600 m-0">Password</label>
          <a href="#" className="text-xs font-medium text-blue-600 hover:underline">Forgot Password?</a>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          defaultValue={state?.inputs?.password || ""}
          className="w-full text-sm text-gray-700 bg-gray-50 rounded-lg p-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
        />
        {/* Specific backend validation error for first_name */}
        {state?.errors?.password && (
          <p className="text-xs text-red-500 mt-1">{state.errors.password[0]}</p>
        )}
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
        disabled={isPending}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-sm rounded-lg border-none transition-colors cursor-pointer shadow-sm mt-2"
      >
        {isPending ? "Processing..." : "Log In"}
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