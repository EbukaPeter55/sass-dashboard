import {Settings, LogOut} from 'lucide-react';
import dashboardIcon from '../../../public/dashboard/dashboard.png'
import dashboardActiveIcon from '../../../public/dashboard/dashboard-active.png';
import {Country, FullDashboardData, NavItem} from '@/app/dashboard/shared/dashboard-types';


export const navItems: NavItem[] = [
    {href: '/dashboard', label: 'Dashboard', image: {default: dashboardIcon, active: dashboardActiveIcon}},
    {href: '/dashboard/settings', label: 'Settings', icon: Settings},
    {type: 'divider'},
    {href: '/logout', label: 'Logout', action: 'logout', icon: LogOut},
];

export const COUNTRIES: Country[] = [
    {
        label: 'US',
        value: 'us',
        flag: '/dashboard/us-flag.png',
    },
    {
        label: 'Nigeria',
        value: 'ng',
        flag: '/dashboard/nigeria-flag.png',
    },
    {
        label: 'French',
        value: 'fr',
        flag: '/dashboard/uk-flag.png',
    },
];

export const MOCK_FULL_DASHBOARD_DATA: FullDashboardData = {
    analyticsData: {
        revenueTimeSeries: [
            {month: 'Jan', revenue: 400, ltv: 300},
            {month: 'Feb', revenue: 600, ltv: 400},
            {month: 'Mar', revenue: 800, ltv: 500},
            {month: 'Apr', revenue: 500, ltv: 350},
            {month: 'May', revenue: 700, ltv: 480},
            {month: 'Jun', revenue: 750, ltv: 510},
            {month: 'Jul', revenue: 620, ltv: 490},
            {month: 'Aug', revenue: 680, ltv: 530},
            {month: 'Sep', revenue: 720, ltv: 560},
            {month: 'Oct', revenue: 800, ltv: 600},
            {month: 'Nov', revenue: 850, ltv: 620},
            {month: 'Dec', revenue: 900, ltv: 640},
        ],
        signupTimeSeries: [
            {month: 'Jan', signups: 400, cancellations: 200},
            {month: 'Feb', signups: 700, cancellations: 300},
            {month: 'Mar', signups: 600, cancellations: 250},
            {month: 'Apr', signups: 800, cancellations: 300},
            {month: 'May', signups: 750, cancellations: 280},
            {month: 'Jun', signups: 670, cancellations: 250},
            {month: 'Jul', signups: 720, cancellations: 270},
            {month: 'Aug', signups: 740, cancellations: 290},
            {month: 'Sep', signups: 710, cancellations: 260},
            {month: 'Oct', signups: 750, cancellations: 310},
            {month: 'Nov', signups: 780, cancellations: 320},
            {month: 'Dec', signups: 800, cancellations: 330},
        ]
    },
    kpiCards: {
        mrr: "$5,276.33",
        ltv: "$5,276.33",
        arpu: "$5,276.33",
        newUsers: 1234,
        activeSubscriptions: 5678,
        churnRate: "2.5%",
        failedPayments: 123
    },
    order: [
        {
            id: 1,
            user: "Ojo Samson",
            totalAmount: "$200.09",
            discountedAmount: "$190.09",
            discount: "$10.00",
            provider: "Stripe",
            createdAt: "24th March, 2024 • 10:03 AM",
            status: "Successful"
        },
        {
            id: 2,
            user: "Musa Andrew",
            totalAmount: "$100.09",
            discountedAmount: "$190.09",
            discount: "$10.00",
            provider: "Stripe",
            createdAt: "25th March, 2024 • 10:03 AM",
            status: "Successful"
        },
        {
            id: 3,
            user: "Ojo Samson",
            totalAmount: "$200.09",
            discountedAmount: "$190.09",
            discount: "$10.00",
            provider: "Stripe",
            createdAt: "24th March, 2024 • 10:03 AM",
            status: "Pending"
        },
        {
            id: 4,
            user: "Ojo Samson",
            totalAmount: "$200.09",
            discountedAmount: "$190.09",
            discount: "$10.00",
            provider: "Stripe",
            createdAt: "24th March, 2024 • 10:03 AM",
            status: "Failed"
        },
        {
            id: 5,
            user: "Ojo Samson",
            totalAmount: "$200.09",
            discountedAmount: "$190.09",
            discount: "$10.00",
            provider: "Stripe",
            createdAt: "24th March, 2024 • 10:03 AM",
            status: "Disputed"
        },
        {
            id: 6,
            user: "Ojo Samson",
            totalAmount: "$200.09",
            discountedAmount: "$190.09",
            discount: "$10.00",
            provider: "Stripe",
            createdAt: "24th March, 2024 • 10:03 AM",
            status: "Refunded"
        },
        {
            id: 7,
            user: "Ben Jolly",
            totalAmount: "$300.09",
            discountedAmount: "$190.09",
            discount: "$10.00",
            provider: "Stripe",
            createdAt: "24th March, 2024 • 10:03 AM",
            status: "Failed"
        },
        {
            id: 8,
            user: "Susan Peters",
            totalAmount: "$300.09",
            discountedAmount: "$190.09",
            discount: "$13.00",
            provider: "Stripe",
            createdAt: "29th March, 2024 • 10:03 AM",
            status: "Successful"
        },
        {
            id: 9,
            user: "Benjamin Franklin",
            totalAmount: "$200.09",
            discountedAmount: "$190.09",
            discount: "$13.00",
            provider: "Stripe",
            createdAt: "30th March, 2024 • 10:03 AM",
            status: "Disputed"
        },
        {
            id: 10,
            user: "Sylvester Franklin",
            totalAmount: "$200.09",
            discountedAmount: "$190.09",
            discount: "$13.00",
            provider: "Paystack",
            createdAt: "28 July, 2024 • 10:03 AM",
            status: "Disputed"
        },
        {
            id: 11,
            user: "Ujunwa Obi",
            totalAmount: "$200.09",
            discountedAmount: "$190.09",
            discount: "$13.00",
            provider: "Kobo-pay",
            createdAt: "28 July, 2024 • 10:03 AM",
            status: "Pending"
        }
    ]
};
