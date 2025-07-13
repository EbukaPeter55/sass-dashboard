'use client';

import SidebarContent from '@/app/dashboard/components/SidebarContent';

interface SideBarProps {
  isCollapsed: boolean
}

export default function SideBar({ isCollapsed }: SideBarProps) {

  return (
    <aside className={`hidden lg:block bg-white transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <SidebarContent isCollapsed={isCollapsed}/>
    </aside>
  );
}
