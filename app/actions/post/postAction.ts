"use server";

import { cookies } from "next/headers";

/**
 * Server action to handle post creation.
 * It reads the auth_token from cookies and sends the post data (FormData) to Laravel.
 * * @param formData - The form data containing title, visibility, and optional attachment file.
 */
export async function createPostAction(formData: FormData) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("auth_token")?.value;

        // If no token is found, return an error response
        if (!token) {
            return {
                success: false,
                error: "Unauthorized. Please login again.",
            };
        }

        // Call our Laravel API using the configured environment variable
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
            },
            body: formData, // Sending the FormData containing text and file
        });

        const result = await response.json();

        if (!response.ok) {
            return {
                success: false,
                error: result.message || "Failed to create post.",
            };
        }

        return {
            success: true,
            data: result.data,
        };

    } catch (error: any) {
        return {
            success: false,
            error: error.message || "Something went wrong while connecting to the server.",
        };
    }
}

/**
 * Server action to fetch posts with high-performance cursor pagination.
 * Supports infinite scrolling by passing the cursor string.
 * * @param cursor - The encoded cursor string for the next page (optional)
 */
export async function fetchPostsAction(cursor: string | null = null) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("auth_token")?.value;

        // If no token is found, return an error response
        if (!token) {
            return {
                success: false,
                error: "Unauthorized. Please login again.",
            };
        }

        // Build the API endpoint with cursor pagination support if a cursor is present
        let endpoint = `${process.env.NEXT_PUBLIC_API_URL}/posts`;
        if (cursor) {
            endpoint += `?cursor=${encodeURIComponent(cursor)}`;
        }

        // Fetch posts from Laravel
        const response = await fetch(endpoint, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
            },
            // Revalidate data on every request, or keep it cached as per your need
            cache: "no-store" 
        });

        const result = await response.json();

        if (!response.ok) {
            return {
                success: false,
                error: result.message || "Failed to fetch posts.",
            };
        }

        /**
         * Since we are using cursorPaginate in Laravel, the returned API structure includes:
         * - data: Array of posts
         * - next_cursor: Token pointing to the next batch of posts (null if no more data)
         * - prev_cursor: Token pointing to the previous batch
         */
        return {
            success: true,
            data: result.data.data, 
            nextCursor: result.data.next_cursor, 
            prevCursor: result.data.prev_cursor,
        };

    } catch (error: any) {
        return {
            success: false,
            error: error.message || "Something went wrong while fetching posts.",
        };
    }
}