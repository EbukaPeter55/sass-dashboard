'use client';

import { useState } from 'react';
import SideBar from './components/SideBar';
import Header from './components/Header';
import MobileDrawer from './components/MobileDrawer';
import { ChevronLeft, ChevronRight } from 'lucide-react';


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const handleMenuClick = () => setIsOpen(!isOpen);
    const handleDrawerClose = () => setIsOpen(false);
    const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

    return (
        <div className="flex min-h-screen">
            {/* Desktop Sidebar */}
            <SideBar isCollapsed={isSidebarCollapsed} />

            {/* Mobile Drawer */}
            <MobileDrawer open={isOpen} onClose={handleDrawerClose} />

            <div className="flex-1 flex flex-col">
                <Header onMenuClick={handleMenuClick} />
                <button
                    onClick={toggleSidebar}
                    className="absolute top-4 left-64 z-50 bg-white border rounded-full p-1 shadow transition-all hidden lg:block cursor-pointer"
                    style={{ left: isSidebarCollapsed ? '3.5rem' : '15.5rem' }} // 3.5rem for collapsed, 15.5rem for expanded
                >
                    {isSidebarCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                </button>

                <main className="p-4 overflow-y-auto flex-1 bg-slate-50">
                    {children}
                </main>
            </div>
        </div>
    );
}
