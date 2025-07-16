'use client';

import React, {useState, useCallback} from 'react';
import {X} from 'lucide-react';
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Notification} from "@/app/dashboard/shared/dashboard-types";
import {dummyNotifications} from "@/app/dashboard/shared/dashboard-constant";

interface NotificationDropdownProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function NotificationDropdown({isOpen, onClose}: NotificationDropdownProps) {
    const [notifications, setNotifications] = useState<Notification[]>(dummyNotifications);

    const handleMarkAllAsRead = useCallback(() => {
        setNotifications(prev => prev.map(notif => ({...notif, read: true})));
    }, []);

    const handleNotificationClick = useCallback((id: string) => {
        setNotifications(prev =>
            prev.map(notif => (notif.id === id ? {...notif, read: true} : notif)),
        );
    }, []);

    if (!isOpen) return null;

    return (
        <div data-testid="notification-dropdown"
             className={cn(
                 'absolute right-0 mt-2 w-80 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none',
                 'flex flex-col overflow-hidden',
                 'transition-all duration-200 ease-out',
                 isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none',
                 'dark:bg-gray-800 dark:ring-gray-700 dark:shadow-xl dark:shadow-gray-950'
             )}
             style={{zIndex: 1000}}
        >
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Notifications</h3>
                <button
                    onClick={onClose}
                    className="p-1 rounded-full hover:bg-gray-100 text-gray-500 transition-colors dark:hover:bg-gray-700 dark:text-gray-400"
                    aria-label="Close notifications"
                >
                    <X className="h-5 w-5 dark:text-gray-400"/>
                </button>
            </div>

            {/* Notifications List */}
            <div className="flex-grow overflow-y-auto max-h-80">
                {notifications.length === 0 ? (
                    <div className="p-4 text-center text-gray-500 text-sm dark:text-gray-400">No new
                        notifications.</div>
                ) : (
                    notifications.map((notification) => (
                        <div
                            key={notification.id}
                            onClick={() => handleNotificationClick(notification.id)}
                            className={cn(
                                'flex items-start gap-3 p-4 border-b border-gray-100 cursor-pointer',
                                !notification.read ? 'bg-blue-50 hover:bg-blue-100' : 'hover:bg-gray-50',
                                'dark:border-gray-700',
                                !notification.read ? 'dark:bg-blue-950 dark:hover:bg-blue-900' : 'dark:hover:bg-gray-700/50',
                            )}
                        >
                            <div
                                className={cn(
                                    'flex-shrink-0 h-2 w-2 rounded-full mt-1.5',
                                    !notification.read ? 'bg-blue-600' : 'bg-transparent',
                                    !notification.read ? 'dark:bg-blue-500' : 'dark:bg-transparent',
                                )}
                            ></div>
                            <div className="flex-grow">
                                <p
                                    className={cn(
                                        'text-sm',
                                        !notification.read ? 'font-semibold text-gray-900' : 'text-gray-700',
                                        !notification.read ? 'dark:text-gray-100' : 'dark:text-gray-300',
                                    )}
                                >
                                    {notification.message}
                                </p>
                                <span
                                    className="text-xs text-gray-500 mt-1 block dark:text-gray-400">{notification.time}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Footer */}
            <div className="p-4 flex justify-end border-t border-gray-200 dark:border-gray-700">
                <Button
                    onClick={handleMarkAllAsRead}
                    className="text-sm font-medium text-[var(--background-primary)] hover:underline dark:text-blue-400 dark:hover:text-blue-300"
                    variant="ghost"
                >
                    Mark all as read
                </Button>
            </div>
        </div>
    );
}
