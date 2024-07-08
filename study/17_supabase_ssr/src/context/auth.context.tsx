"use client";

import { User } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextValue = {
    isInitialized: boolean;
    isLoggedIn: boolean | null;
    me: User | null;
    login: (email: string, password: string) => void;
    logout: () => void;
    signup: (email: string, password: string) => void;
};

const initialValue = {
    isInitialized: false,
    isLoggedIn: null,
    me: null,
    login: () => {},
    logout: () => {},
    signup: () => {},
};

const AuthContext = createContext<AuthContextValue>(initialValue);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isInitialized, setIsInitialized] = useState<AuthContextValue["isInitialized"]>(false);
    const [me, setMe] = useState<AuthContextValue["me"]>(null);
    const isLoggedIn = !!me;

    const login = async (email: string, password: string) => {
        if (me) return alert("이미 로그인 되어있습니다.");
        if (!email || !password) return alert("모든 항목을 입력해주세요");

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const { user } = await response.json();
            setMe(user);
        } catch (error) {
            console.error(error);
        }
    };

    const logout = async () => {
        if (!me) return alert("로그인 되어있지 않습니다.");

        try {
            const response = await fetch("/api/auth/logout", {
                method: "DELETE",
            });

            if (response.ok) {
                const { message } = await response.json();
                console.log(message);
                setMe(null);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const signup = async (email: string, password: string) => {
        if (me) return alert("이미 로그인 되어있습니다.");
        if (!email || !password) return alert("모든 항목을 입력해주세요");

        try {
            const response = await fetch("/api/auth/sign-up", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const { user } = await response.json();
            setMe(user);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch("/api/auth/me");
            if (response.status === 200) {
                const { user } = await response.json();
                setMe(user);
            }
            setIsInitialized(true);
        };
        fetchUser();
    }, []);

    const value: AuthContextValue = {
        isInitialized,
        isLoggedIn,
        me,
        login,
        logout,
        signup,
    };

    if (!isInitialized) return null;

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
