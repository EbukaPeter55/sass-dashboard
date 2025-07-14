import {Settings, LogOut} from 'lucide-react';
import dashboardIcon from '../../../public/dashboard/dashboard.png'
import dashboardActiveIcon from '../../../public/dashboard/dashboard-active.png';
import {NavItem} from '@/app/dashboard/shared/dashboard-types';


export const navItems: NavItem[] = [
    {href: '/dashboard', label: 'Dashboard', image: {default: dashboardIcon, active: dashboardActiveIcon}},
    {href: '/settings', label: 'Settings', icon: Settings},
    {type: 'divider'},
    {href: '/logout', label: 'Logout', action: 'logout', icon: LogOut},
];
