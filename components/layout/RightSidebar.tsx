export default function RightSidebar() {
    return (
        <div>
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm sm:text-base font-bold text-gray-800 m-0">You Might Like</h4>
                    <a className="text-xs font-semibold text-blue-600 hover:underline no-underline" href="#0">See All</a>
                </div>
                <hr className="border-gray-100 my-3" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-4">
                    <div className="flex items-center">
                        <div className="mr-3 flex-shrink-0">
                            <a href="profile.html">
                                <img src="assets/images/Avatar.png" alt="Image"
                                    className="w-10 h-10 rounded-full object-cover" />
                            </a>
                        </div>
                        <div>
                            <a href="profile.html" className="no-underline">
                                <h4 className="text-xs sm:text-sm font-semibold text-gray-800 m-0 hover:text-blue-600">
                                    Radovan SkillArena</h4>
                            </a>
                            <p className="text-xs text-gray-500 m-0 mt-0.5">Founder & CEO at Trophy</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2 mt-4">
                    <button type="button"
                        className="flex-1 py-1.5 px-3 text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md border-none transition-colors cursor-pointer">Ignore</button>
                    <button type="button"
                        className="flex-1 py-1.5 px-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md border-none transition-colors cursor-pointer">Follow</button>
                </div>
            </div>

            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm sm:text-base font-bold text-gray-800 m-0">Your Friends</h4>
                    <a className="text-xs font-semibold text-blue-600 hover:underline no-underline"
                        href="find-friends.html">See All</a>
                </div>

                <div
                    className="relative flex items-center bg-gray-100 rounded-full px-3.5 py-2 mb-4 border border-transparent focus-within:border-gray-200">
                    <svg className="text-gray-400 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="16"
                        height="16" fill="none" viewBox="0 0 17 17">
                        <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="2"></circle>
                        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M16 16l-3-3"></path>
                    </svg>
                    <input
                        className="w-full bg-transparent text-xs text-gray-700 border-none outline-none focus:ring-0 py-0"
                        type="search" placeholder="Search friends..." />
                </div>

                <div className="space-y-4 max-h-[350px] overflow-y-auto pr-1">

                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center min-w-0">
                            <div className="mr-3 flex-shrink-0">
                                <a href="profile.html">
                                    <img src="assets/images/profile.png" alt="User"
                                        className="w-9 h-9 rounded-full object-cover" />
                                </a>
                            </div>
                            <div className="min-w-0">
                                <a href="profile.html" className="no-underline">
                                    <h4
                                        className="text-xs sm:text-sm font-semibold text-gray-800 m-0 truncate hover:text-blue-600">
                                        Steve Jobs</h4>
                                </a>
                                <p className="text-xs text-gray-500 m-0 truncate">CEO of Apple</p>
                            </div>
                        </div>
                        <span className="text-[10px] text-gray-400 flex-shrink-0 whitespace-nowrap">5m ago</span>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center min-w-0">
                            <div className="mr-3 flex-shrink-0 relative">
                                <a href="profile.html">
                                    <img src="assets/images/profile.png" alt="User"
                                        className="w-9 h-9 rounded-full object-cover" />
                                </a>
                                <span
                                    className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                            </div>
                            <div className="min-w-0">
                                <a href="profile.html" className="no-underline">
                                    <h4
                                        className="text-xs sm:text-sm font-semibold text-gray-800 m-0 truncate hover:text-blue-600">
                                        Ryan Roslansky</h4>
                                </a>
                                <p className="text-xs text-gray-500 m-0 truncate">CEO of Linkedin</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center min-w-0">
                            <div className="mr-3 flex-shrink-0 relative">
                                <a href="profile.html">
                                    <img src="assets/images/profile.png" alt="User"
                                        className="w-9 h-9 rounded-full object-cover" />
                                </a>
                                <span
                                    className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                            </div>
                            <div className="min-w-0">
                                <a href="profile.html" className="no-underline">
                                    <h4
                                        className="text-xs sm:text-sm font-semibold text-gray-800 m-0 truncate hover:text-blue-600">
                                        Dylan Field</h4>
                                </a>
                                <p className="text-xs text-gray-500 m-0 truncate">CEO of Figma</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}