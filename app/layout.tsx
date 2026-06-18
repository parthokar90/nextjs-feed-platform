// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "Social Media Feed",
  description: "Built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen text-gray-800 antialiased">
        {children}
      </body>
    </html>
  );
}