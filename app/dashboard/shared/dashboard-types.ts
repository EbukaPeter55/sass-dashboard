import type {LucideIcon} from 'lucide-react';
import type {StaticImageData} from 'next/image';

export type ImagePair = { default: StaticImageData; active: StaticImageData };

export type NavDivider = { type: 'divider' };

export type NavLink = {
    href: string;
    label: string;
    image?: ImagePair;
    icon?: LucideIcon;
    action?: 'logout';
};

export type NavDropdown = {
    label: string;
    icon?: LucideIcon;
    children: (NavLink | NavDivider)[];
};

export type NavItem = NavLink | NavDropdown | NavDivider;

export type Order = {
    id: number;
    user: string | { name: string; username?: string; avatar?: string };
    totalAmount: string;
    discountedAmount: string;
    discount: string;
    provider: string;
    createdAt: string;
    status: string;
};

export interface RevenueDataPoint {
    month: string;
    revenue: number;
    ltv: number;
}

export interface SignupDataPoint {
    month: string;
    signups: number;
    cancellations: number;
}

export interface RawAnalyticsDataFromBin {
    revenueTimeSeries: RevenueDataPoint[];
    signupTimeSeries: SignupDataPoint[];
}

export interface FormattedAnalyticsDataForComponent {
    revenueData: RevenueDataPoint[];
    signupData: SignupDataPoint[];
}

export interface KpiCardData {
    mrr: string;
    ltv: string;
    arpu: string;
    newUsers: number;
    activeSubscriptions: number;
    churnRate: string;
    failedPayments: number;
}

export interface FullDashboardData {
    analyticsData: RawAnalyticsDataFromBin;
    order: Order[];
    kpiCards: KpiCardData;
}

export type DashboardStats = KpiCardData;

export type Country = {
    label: string
    value: string
    flag: string
}
