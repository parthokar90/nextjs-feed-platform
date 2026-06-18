"use client";

import React from "react";
import Link from "next/link";

export default function RegisterPage() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Create Account</h2>

            {/* Name Input */}
            <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name</label>
                <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="w-full text-sm text-gray-700 bg-gray-50 rounded-lg p-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
            </div>

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
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Password</label>
                <input
                    type="password"
                    placeholder="Create a strong password"
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

            {/* Register Button */}
            <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg border-none transition-colors cursor-pointer shadow-sm mt-2"
            >
                Sign Up
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