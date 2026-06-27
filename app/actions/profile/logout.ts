"use server";

import { cookies } from "next/headers";

import { redirect } from "next/navigation";

export async function logoutUser() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("auth_token")?.value;

        if (token) {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
            });
        }
    } catch (error) {
        
    }

    const cookieStore = await cookies();
    cookieStore.delete("auth_token");

    redirect("/login");
}