import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {AuthProvider} from "@/app/contexts/AuthContext";
import {Toaster} from 'react-hot-toast';
import {ThemeProvider} from "@/app/provider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "LawPavillion",
    description: "Your legal tech solution",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900 dark:bg-gray-900 dark:text-gray-100`}
        >
        <ThemeProvider
            attribute="class" // This adds 'dark' or 'light' class to the html tag
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <AuthProvider>
                {children}
            </AuthProvider>
        </ThemeProvider>
        <Toaster position="top-right" reverseOrder={false}/>
        </body>
        </html>
    );
}
