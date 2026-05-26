import { cookies } from "next/headers";

export const getPosts = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME || "token")?.value;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            ...(token && { "Cookie": `token=${token}` }),
        },
        cache: "no-store", 
    });

    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }

    return response.json();
};