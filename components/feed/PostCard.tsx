"use client";

import React, { useState } from "react";
import Link from "next/link";

// =========================================================================
// 1. Updated TypeScript Interfaces to match your Server Action Payload
// =========================================================================
export interface User {
    id: number;
    first_name: string;       
    last_name?: string | null;
    email?: string;
    avatar?: string | null;   
}

export interface Comment {
    id: number;
    user: User;
    content: string;
    created_at: string;
    replies?: any[];
}

export interface PostData {
    id: number;
    user_id: number;
    title: string;
    visibility: "public" | "private";
    attachment: string | null;
    likes_count: number;
    comments_count: number;
    shares_count?: number; 
    created_at: string;
    updated_at: string;
    user?: User;         
    comments?: Comment[];
}

interface PostCardProps {
    post: PostData;
}

// =========================================================================
// 2. Relative Time Formatter
// =========================================================================
function formatRelativeTime(dateString: string): string {
    try {
        const postDate = new Date(dateString);
        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

        if (diffInSeconds < 60) return "Just now";

        const diffInMinutes = Math.floor(diffInSeconds / 60);
        if (diffInMinutes < 60) return `${diffInMinutes}m ago`;

        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours < 24) return `${diffInHours}h ago`;

        const diffInDays = Math.floor(diffInHours / 24);
        return `${diffInDays}d ago`;
    } catch (error) {
        return "Recent";
    }
}

export default function PostCard({ post }: PostCardProps) {
    const [liked, setLiked] = useState<boolean>(false);

    // Dynamic Binding with fallback mechanisms
    const authorName = post.user?.first_name || "Anonymous User";
    const authorAvatar = post.user?.avatar || "/assets/images/profile.png";
    const formattedTime = formatRelativeTime(post.created_at);
    const isPublic = post.visibility === "public";

    return (
        <div className="mb-6 bg-white rounded-lg p-4 sm:p-5 shadow-sm border border-gray-100">
            
            {/* Post Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <div className="mr-3 flex-shrink-0">
                        <Link href={`/profile/${post.user?.id || "#"}`}>
                            <img 
                                src={authorAvatar} 
                                alt={authorName} 
                                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover" 
                                onError={(e) => {
                                    // Fallback if avatar URL crashes or is null
                                    (e.target as HTMLImageElement).src = "/assets/images/profile.png";
                                }}
                            />
                        </Link>
                    </div>
                    <div>
                        <Link href={`/profile/${post.user?.id || "#"}`} className="no-underline">
                            <h4 className="text-sm sm:text-base font-semibold m-0 text-gray-800 hover:text-blue-600">
                                {authorName} {/* Shows 'Test name' perfectly now */}
                            </h4>
                        </Link>
                        <p className="text-xs text-gray-500 m-0 mt-0.5">
                            {formattedTime} · {isPublic ? "🌐 Public" : "🔒 Private"}
                        </p>
                    </div>
                </div>

                {/* Option Dot Menu */}
                <div className="relative">
                    <button type="button" className="p-1 bg-transparent border-none text-gray-400 hover:text-gray-600 cursor-pointer rounded-full hover:bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="19" cy="12" r="1" />
                            <circle cx="5" cy="12" r="1" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Post Content */}
            <div className="mb-4">
                {post.title && (
                    <p className="text-sm text-gray-700 m-0 mb-3 leading-relaxed whitespace-pre-wrap">
                        {post.title}
                    </p>
                )}
                
                {post.attachment && (
                    <div className="rounded-lg overflow-hidden mt-3 max-h-[380px] bg-gray-50 border border-gray-100 flex items-center justify-center">
                        <img 
                            src={post.attachment} 
                            alt="Post Attachment" 
                            className="w-full block object-contain max-h-[380px]" 
                        />
                    </div>
                )}
            </div>

            {/* Post Metrics / Stats */}
            <div className="flex items-center justify-between text-xs text-gray-500 border-b border-gray-100 pb-3 mb-2">
                <div className="flex items-center gap-1">
                    <div className="flex items-center -space-x-1">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-white bg-blue-500 ring-2 ring-white text-[10px]">👍</span>
                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-white bg-red-500 ring-2 ring-white text-[10px]">❤️</span>
                    </div>
                    <span className="font-medium text-gray-600 pl-1">
                        {liked ? (post.likes_count || 0) + 1 : (post.likes_count || 0)} Likes
                    </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 font-medium text-gray-500">
                    <button type="button" className="bg-transparent border-none p-0 text-gray-500 hover:underline cursor-pointer">
                        {post.comments_count || 0} Comments
                    </button>
                    <span>•</span>
                    <button type="button" className="bg-transparent border-none p-0 text-gray-500 hover:underline cursor-pointer">
                        {post.shares_count || 0} Shares
                    </button>
                </div>
            </div>

            {/* Action Area Buttons */}
            <div className="flex justify-between items-center border-b border-gray-100 pb-1 mb-4">
                <button 
                    type="button" 
                    onClick={() => setLiked(!liked)}
                    className={`flex-1 py-2 rounded-md text-xs sm:text-sm font-semibold bg-transparent border-none flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                        liked ? "text-blue-600 hover:bg-blue-50/50" : "text-gray-600 hover:bg-gray-50"
                    }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z" />
                        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                    </svg>
                    <span>Like</span>
                </button>
                <button type="button" className="flex-1 py-2 text-gray-600 hover:bg-gray-50 rounded-md text-xs sm:text-sm font-semibold bg-transparent border-none flex items-center justify-center gap-2 transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <span>Comment</span>
                </button>
                <button type="button" className="flex-1 py-2 text-gray-600 hover:bg-gray-50 rounded-md text-xs sm:text-sm font-semibold bg-transparent border-none flex items-center justify-center gap-2 transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="3" />
                        <circle cx="6" cy="12" r="3" />
                        <circle cx="18" cy="19" r="3" />
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                    <span>Share</span>
                </button>
            </div>

            {/* Comments Footer Section */}
            <div className="space-y-4">
                {post.comments && post.comments.length > 0 ? (
                    post.comments.map((comment) => (
                        <div key={comment.id} className="flex items-start gap-2.5">
                            <img 
                                src={comment.user.avatar || "/assets/images/profile.png"} 
                                alt={comment.user.first_name} 
                                className="w-8 h-8 rounded-full object-cover flex-shrink-0 mt-0.5" 
                            />
                            <div className="flex-grow group">
                                <div className="flex items-start justify-between bg-gray-100 rounded-2xl px-3 py-2 max-w-full sm:max-w-[90%] inline-block">
                                    <div>
                                        <Link href={`/profile/${comment.user.id}`} className="no-underline text-xs font-bold text-gray-800 hover:underline">
                                            {comment.user.first_name}
                                        </Link>
                                        <p className="text-xs sm:text-sm text-gray-700 m-0 mt-0.5">
                                            {comment.content}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 pl-2 mt-1 text-[11px] text-gray-500 font-semibold">
                                    <button type="button" className="bg-transparent border-none p-0 text-gray-500 hover:text-blue-600 cursor-pointer">Like</button>
                                    <button type="button" className="bg-transparent border-none p-0 text-gray-500 hover:text-blue-600 cursor-pointer">Reply</button>
                                    <span>{formatRelativeTime(comment.created_at)}</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    /* Mock Fallback when comments array hasn't been fetched yet */
                    <div className="flex items-start gap-2.5">
                        <img src="/assets/images/profile.png" alt="Commenter" className="w-8 h-8 rounded-full object-cover flex-shrink-0 mt-0.5" />
                        <div className="flex-grow group">
                            <div className="flex items-start justify-between bg-gray-100 rounded-2xl px-3 py-2 max-w-full sm:max-w-[90%] inline-block">
                                <div>
                                    <Link href="/profile/amara" className="no-underline text-xs font-bold text-gray-800 hover:underline">Amara</Link>
                                    <p className="text-xs sm:text-sm text-gray-700 m-0 mt-0.5">ভাইয়া ডিজাইনটা অনেক জোস হয়েছে! রেসপন্সিভও পারফেক্ট।</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 pl-2 mt-1 text-[11px] text-gray-500 font-semibold">
                                <button type="button" className="bg-transparent border-none p-0 text-gray-500 hover:text-blue-600 cursor-pointer">Like</button>
                                <button type="button" className="bg-transparent border-none p-0 text-gray-500 hover:text-blue-600 cursor-pointer">Reply</button>
                                <span>1h ago</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Comment Box Form Input Area */}
                <div className="flex items-center gap-2.5 pt-2 border-t border-gray-100">
                    <img src="/assets/images/profile.png" alt="User" className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                    <div className="flex-grow flex items-center bg-gray-100 rounded-full px-3.5 py-2">
                        <input 
                            type="text" 
                            placeholder="Write a comment..." 
                            className="w-full bg-transparent text-xs sm:text-sm text-gray-700 border-none outline-none focus:ring-0 py-0" 
                        />
                        <button type="button" className="bg-transparent border-none p-0.5 text-blue-600 hover:text-blue-800 cursor-pointer flex items-center justify-center ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}