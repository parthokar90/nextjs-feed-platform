"use client";

import React, { useEffect, useState } from "react";
// Importing your server action
import { fetchPostsAction } from "@/app/actions/post/postAction";
import PostCard, { PostData } from "./PostCard";

export default function PostList() {
    const [posts, setPosts] = useState<PostData[]>([]);
    const [nextCursor, setNextCursor] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Fetch initial posts on component mount
    useEffect(() => {
        loadInitialPosts();
    }, []);

    // Initial load handler
    const loadInitialPosts = async () => {
        setLoading(true);
        setError(null);
        try {
            // Call the server action with null cursor for the first page
            const result = await fetchPostsAction(null);
            
            if (result.success) {
                setPosts(result.data);
                setNextCursor(result.nextCursor);
            } else {
                setError(result.error || "Failed to load posts.");
            }
        } catch (err) {
            setError("Something went wrong while fetching posts.");
        } finally {
            setLoading(false);
        }
    };

    // Load more handler for cursor pagination
    const loadMorePosts = async () => {
        if (loading || !nextCursor) return;
        setLoading(true);

        try {
            // Call the server action with the next cursor pointer
            const result = await fetchPostsAction(nextCursor);
            
            if (result.success) {
                // Merge newly fetched posts with existing posts
                setPosts((prevPosts) => [...prevPosts, ...result.data]);
                setNextCursor(result.nextCursor);
            } else {
                console.error("Pagination Error:", result.error);
            }
        } catch (err) {
            console.error("Failed to load more posts:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto px-2 sm:px-0">
            {/* Error Message Alert */}
            {error && (
                <div className="p-4 mb-4 text-sm text-red-700 bg-red-50 rounded-lg text-center font-medium">
                    {error}
                </div>
            )}

            {/* Dynamic Rendering Loop using PostCard */}
            <div className="space-y-1">
                {posts.map((postItem) => (
                    <PostCard key={postItem.id} post={postItem} />
                ))}
            </div>

            {/* Empty State Fallback */}
            {!loading && posts.length === 0 && !error && (
                <div className="text-center py-12 text-gray-500 text-sm bg-white rounded-lg border border-gray-100 shadow-sm">
                    No posts available right now.
                </div>
            )}

            {/* Load More Trigger Button */}
            {nextCursor && (
                <div className="text-center mt-6 mb-8">
                    <button 
                        onClick={loadMorePosts} 
                        disabled={loading}
                        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-400 rounded-full text-xs sm:text-sm font-semibold cursor-pointer shadow-sm transition-all border-none outline-none"
                    >
                        {loading ? "Loading older posts..." : "Load More Posts"}
                    </button>
                </div>
            )}

            {/* Skeleton Loader during initial fetch */}
            {loading && posts.length === 0 && (
                <div className="space-y-4">
                    {[1, 2].map((n) => (
                        <div key={n} className="animate-pulse bg-white rounded-lg p-5 h-64 border border-gray-100">
                            <div className="flex gap-3 mb-4 items-center">
                                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                                <div className="space-y-2">
                                    <div className="h-4 w-32 bg-gray-200 rounded" />
                                    <div className="h-3 w-20 bg-gray-200 rounded" />
                                </div>
                            </div>
                            <div className="h-4 bg-gray-200 rounded w-5/6 mb-3" />
                            <div className="h-32 bg-gray-200 rounded w-full" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}