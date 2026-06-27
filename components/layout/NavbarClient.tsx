"use client";

import React, { useState, useRef, useEffect } from "react";

import { logoutUser } from "@/app/actions/profile/logout";

import Link from "next/link";

interface UserProfile {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
}

interface NavbarClientProps {
    user: UserProfile | null;
}

export default function NavbarClient({ user }: NavbarClientProps) {

    const [isOpen, setIsOpen] = useState(false);

    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const displayName = user ? `${user.first_name} ${user.last_name || ""}` : "Guest User";

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Left Section: Logo & Search Bar */}
                    <div className="flex items-center flex-1 max-w-xl">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <img src="/assets/images/logo.svg" alt="Buddy Script" className="h-8 w-auto" />
                        </Link>

                        <div className="ml-6 flex-1 hidden sm:block max-w-xs">
                            <div className="relative rounded-xl">
                                <input type="text"
                                    className="block w-full pl-4 pr-10 py-2 bg-gray-50 border border-gray-200 text-sm rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                    placeholder="input search text" />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: Desktop Navigation Items */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Link href="/" className="p-2.5 text-blue-600 bg-blue-50/70 rounded-xl hover:bg-blue-50/90 transition-colors relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" fill="none" viewBox="0 0 18 21" className="h-5 w-5">
                                <path stroke="currentColor" strokeWidth="1.6" strokeOpacity="0.8" d="M1 9.924c0-1.552 0-2.328.314-3.01.313-.682.902-1.187 2.08-2.196l1.143-.98C6.667 1.913 7.732 1 9 1c1.268 0 2.333.913 4.463 2.738l1.142.98c1.179 1.01 1.768 1.514 2.081 2.196.314.682.314 1.458.314 3.01v4.846c0 2.155 0 3.233-.67 3.902-.669.67-1.746.67-3.901.67H5.57c-2.155 0-3.232 0-3.902-.67C1 18.002 1 16.925 1 14.77V9.924z" />
                                <path stroke="currentColor" strokeOpacity="0.8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M11.857 19.341v-5.857a1 1 0 00-1-1H7.143a1 1 0 00-1 1v5.857" />
                            </svg>
                        </Link>

                        <Link href="/friend-requests" className="p-2.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100/70 rounded-xl transition-colors relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[9px] font-bold text-white ring-2 ring-white shadow-sm">2</span>
                        </Link>

                        <div className="relative">
                            <button id="_notify_btn" className="p-2.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100/70 rounded-xl transition-colors relative focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[9px] font-bold text-white ring-2 ring-white shadow-sm">2</span>
                            </button>
                        </div>

                        <Link href="/chat" className="p-2.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100/70 rounded-xl transition-colors relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[9px] font-bold text-white ring-2 ring-white shadow-sm">2</span>
                        </Link>

                        {/* Profile Dropdown Container */}
                        {user ? (
                            <div className="relative border-l border-gray-200 pl-4 ml-2" ref={dropdownRef}>
                                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2 group focus:outline-none bg-transparent border-none cursor-pointer">
                                    <img className="h-9 w-9 rounded-full object-cover ring-2 ring-transparent group-hover:ring-blue-500/20 transition-all" src="/assets/images/profile.png" alt="Avatar" />
                                    <div className="flex flex-col text-left">
                                        <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors leading-none">
                                            {displayName}
                                        </span>
                                    </div>
                                    <svg className={`h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-transform ml-1 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {isOpen && (
                                    <div className="absolute right-0 mt-3 w-52 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden transform transition-all py-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
                                        <div className="px-4 py-2 border-b border-gray-50 flex items-center space-x-2.5 mb-1 bg-gray-50/30">
                                            <img className="h-7 w-7 rounded-full object-cover" src="/assets/images/profile.png" alt="" />
                                            <div className="min-w-0">
                                                <h4 className="text-xs font-bold text-gray-800 truncate">{displayName}</h4>
                                            </div>
                                        </div>

                                        <Link href="/profile" onClick={() => setIsOpen(false)} className="flex items-center space-x-2.5 px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all no-underline">
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            <span className="font-medium">Profile</span>
                                        </Link>

                                        <Link href="/settings" onClick={() => setIsOpen(false)} className="flex items-center space-x-2.5 px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all no-underline">
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 013 0z" />
                                            </svg>
                                            <span className="font-medium">Settings</span>
                                        </Link>

                                        <hr className="border-gray-100 my-1" />

                                        <button
                                            onClick={async () => {
                                                setIsOpen(false);
                                                await logoutUser();
                                            }}
                                            className="w-full flex items-center space-x-2.5 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-all bg-transparent border-none text-left cursor-pointer font-semibold"
                                        >
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg>
                                            <span>Logout</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center space-x-3">
                                <Link href="/login" className="text-sm font-semibold text-gray-500 hover:text-gray-800 no-underline transition-colors">Log In</Link>
                                <Link href="/register" className="text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl no-underline shadow-sm transition-colors">Sign Up</Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Section */}
                    <div className="flex items-center lg:hidden space-x-2">
                        <button className="p-2 text-gray-500 rounded-xl hover:bg-gray-100 sm:hidden focus:outline-none">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="p-2 text-gray-500 hover:text-gray-700 rounded-xl hover:bg-gray-100 focus:outline-none transition-colors">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {isMobileOpen && (
                <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-5 space-y-4 shadow-inner">
                    {user && (
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                            <img className="h-11 w-11 rounded-full" src="/assets/images/profile.png" alt="Avatar" />
                            <div className="flex-1">
                                <span className="block text-sm font-semibold text-gray-800">{displayName}</span>
                                <span className="block text-xs text-gray-400">{user.email}</span>
                            </div>
                            <Link href="/profile" onClick={() => setIsMobileOpen(false)} className="text-blue-600 text-xs font-semibold hover:underline">
                                View Profile
                            </Link>
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-3">
                        <Link href="/" onClick={() => setIsMobileOpen(false)} className="flex items-center justify-center space-x-2 p-3 bg-blue-50 text-blue-600 rounded-xl text-sm font-medium no-underline">
                            <span>Home Feed</span>
                        </Link>
                        <Link href="/settings" onClick={() => setIsMobileOpen(false)} className="flex items-center justify-center space-x-2 p-3 bg-gray-50 text-gray-700 rounded-xl text-sm font-medium no-underline">
                            <span>Settings</span>
                        </Link>
                    </div>
                    <button
                        onClick={async () => {
                            setIsMobileOpen(false);
                            await logoutUser();
                        }}
                        className="flex items-center justify-center space-x-2 p-3 bg-red-50 text-red-600 rounded-xl text-sm font-semibold border-none cursor-pointer w-full"
                    >
                        <span>Logout</span>
                    </button>
                </div>
            )}
        </nav>
    );
}