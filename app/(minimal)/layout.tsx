import React from "react";
import Navbar from "@/components/layout/Navbar";

export default function MinimalLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* 1. Standard Top Navbar */}
            <Navbar />

            {/* 2. Centered Content Wrapper (Without sidebars for a clean look) */}
            <main className="max-w-4xl mx-auto p-4 mt-20">
                {children}
            </main>
        </div>
    );
}