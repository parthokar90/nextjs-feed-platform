"use client";

import React from "react";
import Link from "next/link";

export default function PostCard() {
    return (
        <div className="mb-6 bg-white rounded-lg p-4 sm:p-5 shadow-sm border border-gray-100">
            {/* Post Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <div className="mr-3 flex-shrink-0">
                        <Link href="/profile/partho">
                            <img src="/assets/images/profile.png" alt="User Image" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover" />
                        </Link>
                    </div>
                    <div>
                        <Link href="/profile/partho" className="no-underline">
                            <h4 className="text-sm sm:text-base font-semibold m-0 text-gray-800 hover:text-blue-600">Partho Protim</h4>
                        </Link>
                        <p className="text-xs text-gray-500 m-0 mt-0.5">2 hours ago · 🌐 Public</p>
                    </div>
                </div>

                {/* Triple Dot Options */}
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
                <p className="text-sm text-gray-700 m-0 mb-3 leading-relaxed">
                    Tailwind CSS দিয়ে সম্পূর্ণ ফিড সেকশন, কমেন্ট, রিপ্লাই বক্স এবং ডিলিট অপশন রেসপন্সিভ করে ডিজাইন করলাম। কোনো ইনলাইন সিএসেস ছাড়াই কোড এখন একদম ক্লিন!
                </p>
                <div className="rounded-lg overflow-hidden mt-3">
                    <img src="assets/images/feed_event1.png" alt="Post Attachment" className="w-full block object-cover max-h-[380px]" />
                </div>
            </div>

            {/* Post Stats */}
            <div className="flex items-center justify-between text-xs text-gray-500 border-b border-gray-100 pb-3 mb-2">
                <div className="flex items-center gap-1">
                    <div className="flex items-center -space-x-1">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-white bg-blue-500 ring-2 ring-white text-[10px]">👍</span>
                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-white bg-red-500 ring-2 ring-white text-[10px]">❤️</span>
                    </div>
                    <span className="font-medium text-gray-600 pl-1">Amara and 42 others</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 font-medium text-gray-500">
                    <button type="button" className="bg-transparent border-none p-0 text-gray-500 hover:underline cursor-pointer">2 Comments</button>
                    <span>•</span>
                    <button type="button" className="bg-transparent border-none p-0 text-gray-500 hover:underline cursor-pointer">1 Share</button>
                </div>
            </div>

            {/* Action Buttons (Like, Comment, Share) */}
            <div className="flex justify-between items-center border-b border-gray-100 pb-1 mb-4">
                <button type="button" className="flex-1 py-2 text-gray-600 hover:bg-gray-50 rounded-md text-xs sm:text-sm font-semibold bg-transparent border-none flex items-center justify-center gap-2 transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

            {/* Comments Section */}
            <div className="space-y-4">
                {/* Single Comment */}
                <div className="flex items-start gap-2.5">
                    <img src="/assets/images/profile.png" alt="Commenter" className="w-8 h-8 rounded-full object-cover flex-shrink-0 mt-0.5" />
                    <div className="flex-grow group">
                        <div className="flex items-start justify-between bg-gray-100 rounded-2xl px-3 py-2 max-w-full sm:max-w-[90%] inline-block">
                            <div>
                                <Link href="/profile/amara" className="no-underline text-xs font-bold text-gray-800 hover:underline">Amara</Link>
                                <p className="text-xs sm:text-sm text-gray-700 m-0 mt-0.5">ভাইয়া ডিজাইনটা অনেক জোস হয়েছে! রেসপন্সিভও পারফেক্ট।</p>
                            </div>
                            <div className="ml-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <button type="button" title="Delete Comment" className="p-1 text-gray-400 hover:text-red-500 bg-transparent border-none cursor-pointer rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Comment Actions */}
                        <div className="flex items-center gap-3 pl-2 mt-1 text-[11px] text-gray-500 font-semibold">
                            <button type="button" className="bg-transparent border-none p-0 text-gray-500 hover:text-blue-600 cursor-pointer">Like</button>
                            <button type="button" className="bg-transparent border-none p-0 text-gray-500 hover:text-blue-600 cursor-pointer">Reply</button>
                            <span>1h ago</span>
                        </div>

                        {/* Nested Reply */}
                        <div className="mt-3 flex items-start gap-2 pl-4 border-l-2 border-gray-200">
                            <img src="/assets/images/profile.png" alt="Replier" className="w-6 h-6 rounded-full object-cover flex-shrink-0 mt-0.5" />
                            <div className="flex-grow group/reply">
                                <div className="flex items-start justify-between bg-gray-50 rounded-2xl px-3 py-1.5 max-w-full inline-block">
                                    <div>
                                        <Link href="/profile/partho" className="no-underline text-xs font-bold text-gray-800 hover:underline">Partho Protim</Link>
                                        <p className="text-xs sm:text-sm text-gray-700 m-0 mt-0.5">
                                            <span className="text-blue-600 font-medium">@Amara</span> অনেক ধন্যবাদ! কাজ আরও বাকি আছে।
                                        </p>
                                    </div>
                                    <div className="ml-4 flex items-center opacity-0 group-hover/reply:opacity-100 transition-opacity">
                                        <button type="button" title="Delete Reply" className="p-1 text-gray-400 hover:text-red-500 bg-transparent border-none cursor-pointer rounded">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="3 6 5 6 21 6" />
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 pl-2 mt-0.5 text-[10px] text-gray-500 font-semibold">
                                    <button type="button" className="bg-transparent border-none p-0 text-gray-500 hover:text-blue-600 cursor-pointer">Like</button>
                                    <button type="button" className="bg-transparent border-none p-0 text-gray-500 hover:text-blue-600 cursor-pointer">Reply</button>
                                    <span>45m ago</span>
                                </div>
                            </div>
                        </div>

                        {/* Write Reply Box */}
                        <div className="mt-3 pl-4 flex items-center gap-2">
                            <img src="/assets/images/profile.png" alt="User" className="w-6 h-6 rounded-full object-cover flex-shrink-0" />
                            <div className="flex-grow flex items-center bg-gray-50 rounded-full px-3 py-1 border border-gray-200">
                                <input type="text" placeholder="Write a reply..." className="w-full bg-transparent text-xs text-gray-700 border-none outline-none focus:ring-0 py-0.5" />
                                <button type="button" className="bg-transparent border-none p-1 text-blue-600 hover:text-blue-800 cursor-pointer flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="22" y1="2" x2="11" y2="13" />
                                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Main Comment Box */}
                <div className="flex items-center gap-2.5 pt-2 border-t border-gray-100">
                    <img src="/assets/images/profile.png" alt="User" className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                    <div className="flex-grow flex items-center bg-gray-100 rounded-full px-3.5 py-2">
                        <input type="text" placeholder="Write a comment..." className="w-full bg-transparent text-xs sm:text-sm text-gray-700 border-none outline-none focus:ring-0 py-0" />
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