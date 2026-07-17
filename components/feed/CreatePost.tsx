"use client";

import React, { useState, useRef, ChangeEvent } from "react";
import { createPostAction } from "@/app/actions/post/postAction"; 
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export default function CreatePost() {
    // States for holding form values and loading state
    const [title, setTitle] = useState<string>("");
    const [visibility, setVisibility] = useState<"public" | "private">("public");
    const [attachment, setAttachment] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const user = useSelector((state: RootState) => state.auth.user);

    // Reference to trigger the hidden file input
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Trigger file selection window
    const handlePhotoButtonClick = () => {
        fileInputRef.current?.click();
    };

    // Handle file changes and generate real-time image preview
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setAttachment(file);
            setPreviewUrl(URL.createObjectURL(file)); // Generate temporary local URL for preview
        }
    };

    // Remove selected image before submitting
    const handleRemoveImage = () => {
        setAttachment(null);
        setPreviewUrl(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = ""; 
        }
    };

    // Submit the post via Laravel API Action
    const handlePostSubmit = async () => {
        if (!title.trim() && !attachment) return; 

        setLoading(true);

        // Prepare FormData object to pack files and text data
        const formData = new FormData();
        formData.append("title", title);
        formData.append("visibility", visibility);
        if (attachment) {
            formData.append("attachment", attachment);
        }

        const result = await createPostAction(formData);
        setLoading(false);

        if (result.success) {
            // Reset state values on successful post creation
            setTitle("");
            setAttachment(null);
            setPreviewUrl(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
            alert("Post created successfully!"); 
        } else {
            alert(result.error);
        }
    };

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
                        <h4 className="text-sm font-semibold m-0 text-gray-800">{user ? `${user.first_name} ${user.last_name}` : "Guest User"}</h4>
                        <div className="inline-block relative mt-1">
                            <select 
                                value={visibility}
                                onChange={(e) => setVisibility(e.target.value as "public" | "private")}
                                className="block appearance-none w-full bg-gray-100 text-gray-600 text-xs py-1 px-2 pr-6 rounded-md border-none focus:outline-none cursor-pointer font-medium"
                            >
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="What's on your mind, Partho?"
                    className="w-full text-sm text-gray-700 bg-[#f0f2f5] rounded-lg p-3 border-none focus:outline-none focus:ring-1 focus:ring-blue-100 resize-none"
                />
            </div>

            {/* Hidden File Input for uploading images */}
            <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                accept="image/png, image/jpeg, image/jpg, image/webp" 
                className="hidden" 
            />

            {/* Selected Image Preview with Remove Button */}
            {previewUrl && (
                <div className="relative mb-4 rounded-lg overflow-hidden border border-gray-100">
                    <img 
                        src={previewUrl} 
                        alt="Selected Upload Preview" 
                        className="max-h-60 w-full object-cover" 
                    />
                    <button 
                        type="button" 
                        onClick={handleRemoveImage}
                        className="absolute top-2 right-2 bg-gray-950/70 hover:bg-red-600 text-white font-bold p-1 rounded-full w-8 h-8 flex items-center justify-center transition-colors border-none cursor-pointer text-xs"
                        title="Remove Image"
                    >
                        ✕
                    </button>
                </div>
            )}

            <hr className="border-gray-100 my-3" />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                    {/* Trigger File input on Photo button click */}
                    <button 
                        type="button" 
                        onClick={handlePhotoButtonClick}
                        className="flex items-center text-gray-500 p-1 bg-transparent border-none text-xs sm:text-sm font-medium gap-1.5 hover:text-green-600 transition-colors cursor-pointer"
                    >
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
                    <button 
                        type="button" 
                        onClick={handlePostSubmit}
                        disabled={loading || (!title.trim() && !attachment)}
                        className={`w-full sm:w-auto px-6 py-2 text-white font-medium text-sm rounded-full border-none transition-colors cursor-pointer ${
                            loading || (!title.trim() && !attachment) ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                        }`}
                    >
                        {loading ? "Posting..." : "Post"}
                    </button>
                </div>
            </div>
        </div>
    );
}