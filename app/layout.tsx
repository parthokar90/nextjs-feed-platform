import React from "react";
import "./globals.css";

export const metadata = {
  title: "Social Media Feed",
  description: "Built with Next.js and Tailwind CSS",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen text-gray-800 antialiased">
        {children}
      </body>
    </html>
  );
}