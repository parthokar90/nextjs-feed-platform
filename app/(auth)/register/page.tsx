"use client";

import React, { useActionState } from "react";
import Link from "next/link";
import { registerUser } from "@/app/actions/auth/register";

export default function RegisterPage() {
    
    const [state, formAction, isPending] = useActionState(registerUser, null);

    return (
        <form action={formAction} className="space-y-4 max-w-md mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Create Account</h2>

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

            {/* First Name */}
            <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">First Name</label>
                <input
                    name="first_name"
                    type="text"
                    placeholder="Enter your first name"
                    required
                    defaultValue={state?.inputs?.first_name || ""}
                    className="w-full text-sm text-gray-700 bg-gray-50 rounded-lg p-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
                {/* Specific backend validation error for first_name */}
                {state?.errors?.first_name && (
                    <p className="text-xs text-red-500 mt-1">{state.errors.first_name[0]}</p>
                )}
            </div>

            {/* Last Name */}
            <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Last Name</label>
                <input
                    name="last_name"
                    type="text"
                    placeholder="Enter your last name"
                    required
                    defaultValue={state?.inputs?.last_name || ""}
                    className="w-full text-sm text-gray-700 bg-gray-50 rounded-lg p-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
                {/* Specific backend validation error for last_name */}
                {state?.errors?.last_name && (
                    <p className="text-xs text-red-500 mt-1">{state.errors.last_name[0]}</p>
                )}
            </div>

            {/* Email Input */}
            <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address</label>
                <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    defaultValue={state?.inputs?.email || ""}
                    className="w-full text-sm text-gray-700 bg-gray-50 rounded-lg p-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
                {/* Map specific backend validation errors for email */}
                {state?.errors?.email && (
                    <p className="text-xs text-red-500 mt-1">{state.errors.email[0]}</p>
                )}
            </div>

            {/* Password Input */}
            <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Password</label>
                <input
                    name="password"
                    type="password"
                    placeholder="Create a strong password"
                    required
                    className="w-full text-sm text-gray-700 bg-gray-50 rounded-lg p-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
                {/* Map specific backend validation errors for password */}
                {state?.errors?.password && (
                    <p className="text-xs text-red-500 mt-1">{state.errors.password[0]}</p>
                )}
            </div>

            {/* Confirm Password Input */}
            <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Confirm Password</label>
                <input
                    name="password_confirmation"
                    type="password"
                    placeholder="Confirm your password"
                    required
                    className="w-full text-sm text-gray-700 bg-gray-50 rounded-lg p-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
                <input
                    id="terms"
                    type="checkbox"
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer mt-0.5"
                />
                <label htmlFor="terms" className="ml-2 text-xs font-medium text-gray-500 cursor-pointer select-none leading-normal">
                    I agree to the <a href="#" className="text-blue-600 no-underline hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 no-underline hover:underline">Privacy Policy</a>
                </label>
            </div>

            {/* Submit Button with Dynamic Loading State */}
            <button
                type="submit"
                disabled={isPending}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-sm rounded-lg border-none transition-colors cursor-pointer shadow-sm mt-2"
            >
                {isPending ? "Creating Account..." : "Sign Up"}
            </button>

            {/* Redirect to Login */}
            <p className="text-center text-xs text-gray-500 mt-4 m-0">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 font-semibold no-underline hover:underline">
                    Log In
                </Link>
            </p>
        </form>
    );
}