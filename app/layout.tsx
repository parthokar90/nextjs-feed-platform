import React from "react";
import Providers from "@/app/redux/Providers";
import { getCurrentUser } from "@/app/actions/profile/user"; 
import "./globals.css";

export const metadata = {
  title: "Social Media Feed",
  description: "Built with Next.js and Tailwind CSS",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const user = await getCurrentUser();
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen text-gray-800 antialiased">
        <Providers user={user}>
          {children}
        </Providers>
      </body>
    </html>
  );
}