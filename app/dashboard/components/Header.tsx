'use client';

import {Bell, Menu} from 'lucide-react';
import CountrySelector from '@/app/dashboard/components/CountrySelector';
import {useEffect, useRef, useState} from 'react';
import NotificationDropdown from '@/app/dashboard/components/NotificationDropdown';
import {Separator} from "@/components/ui/separator";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

interface HeaderProps {
    onMenuClick: () => void;
}

export default function Header({onMenuClick}: HeaderProps) {
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const notificationRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                notificationRef.current &&
                !notificationRef.current.contains(event.target as Node) &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsNotificationsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleNotifications = () => {
        setIsNotificationsOpen((prev) => !prev);
    };

    return (
        <header className="h-16 flex items-center px-4 pr-8 justify-between
                       bg-white dark:bg-gray-800 border-b border-slate-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
                <button className="lg:hidden" onClick={onMenuClick}>
                    <Menu className="h-6 w-6 text-slate-800 dark:text-gray-100"/>
                </button>
                <h2 className="text-lg pl-4 font-normal text-slate-800 dark:text-gray-100 hidden lg:block">Dashboard</h2>
            </div>

            <div className="flex items-center gap-6">
                <div className="relative cursor-pointer" ref={notificationRef}>
                    <Bell className="h-5 w-5 text-slate-800 dark:text-gray-100" data-testid="notification-bell"
                          onClick={toggleNotifications}/>
                    <span
                        className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800"/>
                    {/* Notification Dropdown */}
                    <div ref={dropdownRef}>
                        <NotificationDropdown isOpen={isNotificationsOpen}
                                              onClose={() => setIsNotificationsOpen(false)}/>
                    </div>
                </div>

                <Separator orientation="vertical" className="h-6 bg-slate-300 dark:bg-gray-600"/>

                {/* Country dropdown */}
                <CountrySelector/>

                <Separator orientation="vertical" className="h-6 w-[1px] bg-slate-300 dark:bg-gray-600"/>

                {/* Profile */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://i.pravatar.cc/300" alt="Daniel Joseph"/>
                        <AvatarFallback>DJ</AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex flex-col">
                        <span className="text-sm font-medium text-slate-800 dark:text-gray-100">Daniel Joseph</span>
                        <span className="text-xs text-slate-500 dark:text-gray-300">Role</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
