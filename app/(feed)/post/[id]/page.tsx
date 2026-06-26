import React from "react";

interface PostDetailsProps {
    params: Promise<{ id: string }>;
}

export default async function PostDetailsPage({ params }: PostDetailsProps) {
    
    const { id } = await params;

    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h1 className="text-xl font-bold text-gray-800 m-0">Post Details</h1>
            <p className="text-sm text-gray-500 mt-1">Viewing details for Post ID: <span className="font-semibold text-blue-600">{id}</span></p>

            <div className="mt-6 pt-6 border-t border-gray-100 text-gray-600 text-sm">
                Post content and comments section will be loaded here dynamically.
            </div>
        </div>
    );
}