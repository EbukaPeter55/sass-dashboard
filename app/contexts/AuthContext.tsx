'use client';

import React, {
    createContext,
    useState,
    useEffect,
    useContext,
    ReactNode,
    useCallback,
} from 'react';
import {useRouter} from 'next/navigation';
import toast from "react-hot-toast";

interface User {
    id: string;
    fullName: string;
    email: string;
    password?: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    signup: (fullName: string, email: string, password: string) => Promise<boolean>;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const getMockUsers = (): User[] => {
    const usersJson = localStorage.getItem('mockUsers');
    return usersJson ? JSON.parse(usersJson) : [];
};

const saveMockUsers = (users: User[]) => {
    localStorage.setItem('mockUsers', JSON.stringify(users));
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    // Initialize: Check for an active session on mount
    useEffect(() => {
        const storedUserJson = localStorage.getItem('currentUser');
        if (storedUserJson) {
            try {
                const storedUser: User = JSON.parse(storedUserJson);
                setUser(storedUser);
            } catch (error) {
                console.error("Failed to parse currentUser from localStorage:", error);
                localStorage.removeItem('currentUser');
            }
        }
        setIsLoading(false);
    }, []);

    const signup = useCallback(async (fullName: string, email: string, password: string): Promise<boolean> => {
        setIsLoading(true);
        return new Promise((resolve) => {
            setTimeout(() => {
                const users = getMockUsers();
                if (users.some(u => u.email === email)) {
                    toast.error("User with this email already exists.");
                    setIsLoading(false);
                    resolve(false);
                    return;
                }

                const newUser: User = {
                    id: String(Date.now()),
                    fullName,
                    email,
                    password,
                };
                users.push(newUser);
                saveMockUsers(users);
                toast.success("Signup successful! Please login.");
                router.push('/auth/login');
                setIsLoading(false);
                resolve(true);
            }, 500);
        });
    }, [router]);

    const login = useCallback(async (email: string, password: string): Promise<boolean> => {
        setIsLoading(true);
        return new Promise((resolve) => {
            setTimeout(() => {
                const users = getMockUsers();
                const foundUser = users.find(u => u.email === email && u.password === password);

                if (foundUser) {
                    const userWithoutPassword: User = {
                        id: foundUser.id,
                        fullName: foundUser.fullName,
                        email: foundUser.email,
                    };
                    localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
                    setUser(userWithoutPassword);
                    toast.success(`Welcome back, ${foundUser.fullName}!`);
                    router.push('/dashboard');
                    resolve(true);
                } else {
                    toast.error("Invalid email or password.");
                    resolve(false);
                }
                setIsLoading(false);
            }, 500);
        });
    }, [router]);

    const logout = useCallback(() => {
        setIsLoading(true);
        localStorage.removeItem('currentUser');
        setUser(null);
        router.push('/auth/login');
        setIsLoading(false);
    }, [router]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Loading session...</p>
            </div>
        );
    }

    return (
        <AuthContext.Provider value={{user, login, signup, logout, isLoading}}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
