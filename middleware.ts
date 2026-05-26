import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = [
    "/",
];

const publicRoutes = [
    "/auth/login",
    "/auth/register",
];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME || "token")?.value;

    const isProtectedRoute = protectedRoutes.some(
        (route) => pathname === route || pathname.startsWith(route + "/")
    );

    const isPublicRoute = publicRoutes.some(
        (route) => pathname === route || pathname.startsWith(route + "/")
    );

    if (isProtectedRoute && !token) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    if (isPublicRoute && token) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|assets).*)",
    ],
};