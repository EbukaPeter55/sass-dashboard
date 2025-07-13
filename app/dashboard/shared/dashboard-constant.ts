import { Settings, LogOut } from 'lucide-react';
import dashboardIcon from '../../../public/dashboard/dashboard.png'
import dashboardActiveIcon from '../../../public/dashboard/dashboard-active.png';
import {NavItem, Order} from '@/app/dashboard/shared/dashboard-types';


export const navItems: NavItem[] = [
  { href: '/dashboard', label: 'Dashboard', image: { default: dashboardIcon, active: dashboardActiveIcon } },
  { href: '/settings', label: 'Settings', icon: Settings },
  { type: 'divider' },
  { href: '/logout', label: 'Logout', action: 'logout', icon: LogOut },
]

export const orderData: Order[] = [
  {
    user: 'Ojo Samson',
    totalAmount: '$200.09',
    discountedAmount: '$190.09',
    discount: '$10.00',
    provider: 'Stripe',
    createdAt: '24th March, 2024 • 10:03 AM',
    status: 'Successful',
  },
  {
    user: 'Musa Andrew',
    totalAmount: '$100.09',
    discountedAmount: '$190.09',
    discount: '$10.00',
    provider: 'Stripe',
    createdAt: '25th March, 2024 • 10:03 AM',
    status: 'Successful',
  },
  {
    user: 'Ojo Samson',
    totalAmount: '$200.09',
    discountedAmount: '$190.09',
    discount: '$10.00',
    provider: 'Stripe',
    createdAt: '24th March, 2024 • 10:03 AM',
    status: 'Pending',
  },
  {
    user: 'Ojo Samson',
    totalAmount: '$200.09',
    discountedAmount: '$190.09',
    discount: '$10.00',
    provider: 'Stripe',
    createdAt: '24th March, 2024 • 10:03 AM',
    status: 'Failed',
  },
  {
    user: 'Ojo Samson',
    totalAmount: '$200.09',
    discountedAmount: '$190.09',
    discount: '$10.00',
    provider: 'Stripe',
    createdAt: '24th March, 2024 • 10:03 AM',
    status: 'Disputed',
  },
  {
    user: 'Ojo Samson',
    totalAmount: '$200.09',
    discountedAmount: '$190.09',
    discount: '$10.00',
    provider: 'Stripe',
    createdAt: '24th March, 2024 • 10:03 AM',
    status: 'Refunded',
  },
];
