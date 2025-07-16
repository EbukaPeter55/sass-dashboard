'use client';

import * as React from 'react';
import {useTheme} from 'next-themes';
import {Switch} from '@/components/ui/switch';
import {Label} from '@/components/ui/label';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {saveThemeToLocalStorage, getThemeFromLocalStorage} from '@/app/utils/local-storage-utils';

export function ThemeToggle() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
        // Set theme initially from local storage if available, otherwise let next-themes handle 'system'
        const storedTheme = getThemeFromLocalStorage();
        if (storedTheme && theme !== storedTheme) {
            setTheme(storedTheme);
        }
    }, [setTheme, theme]);


    const handleToggle = (checked: boolean) => {
        const newTheme = checked ? 'dark' : 'light';
        setTheme(newTheme);
        saveThemeToLocalStorage(newTheme);
    };

    if (!mounted) {
        return null;
    }

    return (
        <Card className="w-full max-w-2xl">
            <CardHeader>
                <CardTitle>Theme Settings</CardTitle>
                <CardDescription>
                    Customize your dashboard&apos;s appearance.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center space-x-2">
                    <Switch
                        id="theme-mode"
                        checked={theme === 'dark'}
                        onCheckedChange={handleToggle}
                    />
                    <Label htmlFor="theme-mode">Enable Dark Mode</Label>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                    Current
                    theme: {theme === 'system' ? 'System Default' : theme?.charAt(0).toUpperCase() + theme!.slice(1)}
                </p>
            </CardContent>
        </Card>
    );
}
