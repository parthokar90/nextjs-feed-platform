import React from "react";

export default function SettingsPage() {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="border-b border-gray-100 pb-4 mb-6">
                <h1 className="text-xl font-bold text-gray-800 m-0">Account Settings</h1>
                <p className="text-sm text-gray-500 mt-1">Manage your profile, preferences, and security settings.</p>
            </div>

            {/* Settings Sections Placeholder */}
            <div className="space-y-4">
                <div className="p-4 bg-gray-50/50 rounded-xl border border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-700 mb-1">Profile Information</h3>
                    <p className="text-xs text-gray-400">Update your email, username, and public avatar.</p>
                </div>

                <div className="p-4 bg-gray-50/50 rounded-xl border border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-700 mb-1">Privacy & Security</h3>
                    <p className="text-xs text-gray-400">Change your password and manage two-factor authentication.</p>
                </div>

                <div className="p-4 bg-gray-50/50 rounded-xl border border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-700 mb-1">Notifications</h3>
                    <p className="text-xs text-gray-400">Control the emails and push notifications you receive.</p>
                </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 text-xs text-center text-gray-400">
                Settings forms and state handlers will be integrated here.
            </div>
        </div>
    );
}