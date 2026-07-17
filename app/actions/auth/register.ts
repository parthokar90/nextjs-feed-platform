"use server";

import { cookies } from "next/headers";

export async function registerUser(prevState: any, formData: FormData) {
    const first_name = formData.get("first_name") as string; 
    const last_name = formData.get("last_name") as string;   
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const password_confirmation = formData.get("password_confirmation") as string;

    const currentInputs = { first_name, last_name, email };

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                password,
                password_confirmation,
            }),
        });

        const result = await response.json();

        if (!response.ok) {
            return {
                success: false,
                message: result.message || "Registration failed.",
                errors: result.errors || null,
                inputs: currentInputs
            };
        }

        if (result.success && result.data?.access_token) {
            const cookieStore = await cookies();
            cookieStore.set("auth_token", result.data.access_token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 60 * 60 * 24 * 7,
                path: "/",
            });
            
            return {
                success: true,
                message: "Registration successful!",
                user: result.data.user || { first_name, last_name, email }, 
                errors: null,
                inputs: null
            };
        }

    } catch (error: any) {
        return {
            success: false,
            message: "Something went wrong. Please try again later.",
            errors: null,
            inputs: currentInputs
        };
    }
}