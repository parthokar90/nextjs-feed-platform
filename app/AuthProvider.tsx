"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

import { getCurrentUser } from "@/app/actions/profile/user"; 

interface UserProfile {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
}

interface AuthContextType {
    user: UserProfile | null;
    loading: boolean;
    refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ 
    children, 
    initialUser 
}: { 
    children: React.ReactNode; 
    initialUser: UserProfile | null; 
}) {
    const [user, setUser] = useState<UserProfile | null>(initialUser);
    const [loading, setLoading] = useState(false);

    const refreshUser = async () => {
        setLoading(true);
        try {
            const updatedUser = await getCurrentUser();
            setUser(updatedUser);
        } catch (error) {
            console.error("Failed to refresh user:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, refreshUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};