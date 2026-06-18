import React from "react";
import Navbar from "@/components/layout/Navbar";
import LeftSidebar from "@/components/layout/LeftSidebar";
import RightSidebar from "@/components/layout/RightSidebar";

export default function FeedLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            {/* Navbar */}
            <Navbar />

            {/* Main container */}
            <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">

                {/* Left sidebar */}
                <div className="lg:col-span-3 hidden lg:block">
                    <LeftSidebar />
                </div>

                {/* Main feed*/}
                <div className="lg:col-span-6 space-y-4">
                    {children}
                </div>

                {/* Right sidebar */}
                <div className="lg:col-span-3 hidden lg:block">
                    <RightSidebar />
                </div>

            </div>
        </div>
    );
}