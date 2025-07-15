import {User} from "@/app/dashboard/settings/settings-types";

const USER_STORAGE_KEY = 'currentUser';
const THEME_STORAGE_KEY = 'theme';

/**
 * User related local storage functions
 */
export const getUserFromLocalStorage = (): User | null => {
    if (typeof window === 'undefined') {
        return null;
    }
    try {
        const userJson = localStorage.getItem(USER_STORAGE_KEY);
        return userJson ? JSON.parse(userJson) : null;
    } catch (error) {
        console.error("Failed to parse user data from local storage:", error);
        return null;
    }
};

export const saveUserToLocalStorage = (user: User): void => {
    if (typeof window === 'undefined') {
        return;
    }
    try {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } catch (error) {
        console.error("Failed to save user data to local storage:", error);
    }
};

/**
 * Theme related local storage functions
 */
export const getThemeFromLocalStorage = (): 'light' | 'dark' | 'system' | null => {
    if (typeof window === 'undefined') {
        return null;
    }
    try {
        const theme = localStorage.getItem(THEME_STORAGE_KEY);
        if (theme === 'light' || theme === 'dark' || theme === 'system') {
            return theme;
        }
        return null;
    } catch (error) {
        console.error("Failed to get theme from local storage:", error);
        return null;
    }
};

export const saveThemeToLocalStorage = (theme: 'light' | 'dark' | 'system'): void => {
    if (typeof window === 'undefined') {
        return;
    }
    try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
        console.error("Failed to save theme to local storage:", error);
    }
};
