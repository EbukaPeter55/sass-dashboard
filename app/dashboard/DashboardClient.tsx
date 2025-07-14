'use client';

import {useState, useEffect} from 'react';
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

export default function DashboardClient({initialStats, initialOrders, initialAnalyticsData}: Props) {
    const [orders] = useState(initialOrders);
    const {user} = useAuth();
    const router = useRouter();


    const stats = [
        {
            icon: <Image src={userIcon} alt="New Users" width={16} height={16}/>,
            title: 'New Users',
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
            router.replace('/login');
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
                revenueData={initialAnalyticsData.revenueData} // Uses mapped revenueData
                signupData={initialAnalyticsData.signupData} // Uses mapped signupData
                kpiData={{ // Pass specific KPI values for the DashboardAnalytics component's cards
                    mrr: initialStats.mrr,
                    ltv: initialStats.ltv,
                    arpu: initialStats.arpu,
                }}
            />

            {/* Displaying orders with the new structure */}
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Latest Orders</h2>
                {orders.length > 0 ? (
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        {orders.map(order => (
                            <div key={order.id}
                                 className="border-b last:border-b-0 py-2 flex justify-between items-center text-sm">
                                <p className="font-medium text-slate-800">{order.user}</p>
                                <p className="text-gray-700">{order.totalAmount}</p>
                                {/* Adjusted status badge colors based on new statuses */}
                                <p className={`
                                    px-2 py-1 rounded-full text-xs font-semibold
                                    ${order.status === 'Successful' ? 'bg-green-100 text-green-800' : ''}
                                    ${order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                                    ${order.status === 'Failed' ? 'bg-red-100 text-red-800' : ''}
                                    ${order.status === 'Disputed' ? 'bg-blue-100 text-blue-800' : ''}
                                    ${order.status === 'Refunded' ? 'bg-gray-100 text-gray-800' : ''}
                                `}>
                                    {order.status}
                                </p>
                                <p className="text-gray-500 hidden sm:block">{order.createdAt}</p>
                                <p className="text-gray-500 hidden md:block">{order.provider}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No recent orders.</p>
                )}
            </div>
        </main>
    );
}
