"use server";

import { cookies } from "next/headers";

interface UserProfile {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
}

export async function getCurrentUser(): Promise<UserProfile | null> {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("auth_token")?.value;

        if (!token) {
            return null;
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/me`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            cache: "no-store",
        });

        if (!response.ok) {
            return null;
        }

        const result = await response.json();

        // Ensure you return the exact object that matches the UserProfile interface
        return result.success ? result.data : result;

    } catch (error) {
        return null;
    }
}