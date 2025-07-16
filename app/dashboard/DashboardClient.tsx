'use client';

import {useEffect} from 'react';
import Image from 'next/image';
import DashboardAnalytics from '@/app/dashboard/components/DashboardAnalytics';
import userIcon from '../../public/dashboard/user-card-icon.png';
import failedPaymentIcon from '../../public/dashboard/failed-payment-icon.png';
import churnRateIcon from '../../public/dashboard/churn-rate-icon.png';
import subscriptionCardIcon from '../../public/dashboard/subscription-card-icon.png';
import DashboardCard from "@/components/ui/dashboard-card";
import {Order, DashboardStats, FormattedAnalyticsDataForComponent} from "@/app/dashboard/shared/dashboard-types";
import {useAuth} from "@/app/contexts/AuthContext";
import {useRouter} from 'next/navigation';


interface Props {
    initialStats: DashboardStats;
    initialOrders: Order[];
    initialAnalyticsData: FormattedAnalyticsDataForComponent;
}

export default function DashboardClient({initialStats, initialAnalyticsData}: Props) {
    const {user} = useAuth();
    const router = useRouter();

    const stats = [
        {
            icon: <Image src={userIcon} alt="New Users" width={16} height={16}/>,
            title: 'Monthly Users',
            value: initialStats.newUsers,
            change: '+11.2%',
            changeColor: 'text-green-600',
        },
        {
            icon: <Image src={subscriptionCardIcon} alt="Active Subscriptions" width={16} height={16}/>,
            title: 'Active Subscriptions',
            value: initialStats.activeSubscriptions,
            change: '+11.2%',
            changeColor: 'text-green-600',
        },
        {
            icon: <Image src={churnRateIcon} alt="Churn Rate" width={16} height={16}/>,
            title: 'Churn Rate',
            value: initialStats.churnRate,
            change: '0%',
            changeColor: 'text-purple-600',
        },
        {
            icon: <Image src={failedPaymentIcon} alt="Failed Payments" width={16} height={16}/>,
            title: 'Failed Payments',
            value: initialStats.failedPayments,
            change: '-11.2%',
            changeColor: 'text-red-600',
        },
    ];

    useEffect(() => {
        if (user === null) {
            router.replace('/auth/login');
        }
    }, [user, router]);

    return (
        <main className="min-h-screen bg-slate-50 p-4">
            <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>

            {/* KPI cards (top row) */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {stats.map((s, i) => (
                    <DashboardCard
                        key={i}
                        icon={s.icon}
                        title={s.title}
                        value={s.value}
                        change={s.change}
                        changeColor={s.changeColor}
                    />
                ))}
            </div>

            {/* chart and MRR/LTV/ARPU cards */}
            <DashboardAnalytics
                revenueData={initialAnalyticsData.revenueData}
                signupData={initialAnalyticsData.signupData}
                kpiData={{
                    mrr: initialStats.mrr,
                    ltv: initialStats.ltv,
                    arpu: initialStats.arpu,
                }}
            />
        </main>
    );
}
