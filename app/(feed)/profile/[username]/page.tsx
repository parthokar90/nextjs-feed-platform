import React from "react";

interface ProfileProps {
    params: Promise<{ username: string }>;
}

export default async function UserProfilePage({ params }: ProfileProps) {
    
    const { username } = await params;

    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center space-x-4">
                {/* Dummy Avatar Placeholder */}
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold">
                    {username.charAt(0).toUpperCase()}
                </div>
                <div>
                    <h1 className="text-xl font-bold text-gray-800 m-0">User Profile</h1>
                    <p className="text-sm text-blue-600 font-medium mt-0.5">@{username}</p>
                </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 text-gray-500 text-sm">
                This is a placeholder page for <span className="font-semibold text-gray-700">@{username}</span>. User posts, bio, and follower information will be rendered here.
            </div>
        </div>
    );
}