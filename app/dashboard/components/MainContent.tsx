import {Suspense} from 'react';
import {
    fetchFullDashboardData,
} from '@/app/dashboard/shared/dashboard-service';
import DashboardClient from '@/app/dashboard/DashboardClient';
import {FormattedAnalyticsDataForComponent} from '@/app/dashboard/shared/dashboard-types';

export default async function MainContent() {
    /* server-side data fetching – always fresh */
    const fullData = await fetchFullDashboardData();

    const initialStats = fullData.kpiCards;
    const initialOrders = fullData.order;
    console.log('initialss', fullData);
    const initialAnalyticsData: FormattedAnalyticsDataForComponent = {
        revenueData: fullData.analyticsData.revenueTimeSeries,
        signupData: fullData.analyticsData.signupTimeSeries,
    };

    return (
        <Suspense fallback={<div className="p-4">Loading dashboard…</div>}>
            <DashboardClient
                initialStats={initialStats}
                initialOrders={initialOrders}
                initialAnalyticsData={initialAnalyticsData}
            />
        </Suspense>
    );
}
