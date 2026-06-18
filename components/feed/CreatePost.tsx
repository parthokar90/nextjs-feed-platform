"use client";

import React from "react";

export default function CreatePost() {
    return (
        <div className="mb-5 bg-white rounded-lg p-5 shadow-[0px_2px_8px_rgba(0,0,0,0.05)]">
            {/* User Info & Privacy Dropdown */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <div className="mr-3">
                        <img
                            src="/assets/images/profile.png"
                            alt="User"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold m-0 text-gray-800">Partho Protim</h4>
                        <div className="inline-block relative mt-1">
                            <select className="block appearance-none w-full bg-gray-100 text-gray-600 text-xs py-1 px-2 pr-6 rounded-md border-none focus:outline-none cursor-pointer font-medium">
                                <option value="public">🌐 Public</option>
                                <option value="private">🔒 Private</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-500">
                                <svg className="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Input Area */}
            <div className="mb-4">
                <textarea
                    rows={3}
                    placeholder="What's on your mind, Partho?"
                    className="w-full text-sm text-gray-700 bg-[#f0f2f5] rounded-lg p-3 border-none focus:outline-none focus:ring-1 focus:ring-blue-100 resize-none"
                />
            </div>

            <hr className="border-gray-100 my-3" />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                    <button type="button" className="flex items-center text-gray-500 p-1 bg-transparent border-none text-xs sm:text-sm font-medium gap-1.5 hover:text-green-600 transition-colors cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#24b354" strokeWidth="2" className="sm:w-[18px] sm:h-[18px] w-4 h-4">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <polyline points="21 15 16 10 5 21" />
                        </svg>
                        <span>Photo</span>
                    </button>

                    <button type="button" className="flex items-center text-gray-500 p-1 bg-transparent border-none text-xs sm:text-sm font-medium gap-1.5 hover:text-red-500 transition-colors cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e0245e" strokeWidth="2" className="sm:w-[18px] sm:h-[18px] w-4 h-4">
                            <polygon points="23 7 16 12 23 17 23 7" />
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                        </svg>
                        <span>Video</span>
                    </button>

                    <button type="button" className="flex items-center text-gray-500 p-1 bg-transparent border-none text-xs sm:text-sm font-medium gap-1.5 hover:text-blue-500 transition-colors cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1da1f2" strokeWidth="2" className="sm:w-[18px] sm:h-[18px] w-4 h-4">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span>Event</span>
                    </button>

                    <button type="button" className="flex items-center text-gray-500 p-1 bg-transparent border-none text-xs sm:text-sm font-medium gap-1.5 hover:text-yellow-600 transition-colors cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fab005" strokeWidth="2" className="sm:w-[18px] sm:h-[18px] w-4 h-4">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                        </svg>
                        <span>Article</span>
                    </button>
                </div>

                <div className="text-right">
                    <button type="button" className="w-full sm:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-full border-none transition-colors cursor-pointer">
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
}