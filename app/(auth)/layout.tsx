import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f2f5] p-4 font-sans">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-gray-100">
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-blue-600 tracking-tight m-0">SocialApp</h1>
          <p className="text-gray-500 text-sm mt-1">Connect with friends and the world around you.</p>
        </div>
        
        {/* Load page here */}
        {children}
      </div>
    </div>
  );
}