import { Suspense } from 'react';
import {
  fetchDashboardStats,
  fetchLatestOrders,
} from '@/app/dashboard/shared/dashboard-service';
import DashboardClient from '@/app/dashboard/DashboardClient';

export default async function DashboardPage() {
  /* server-side data fetching – always fresh */
  const [stats, orders] = await Promise.all([
    fetchDashboardStats(),
    fetchLatestOrders(),
  ]);

  return (
    <Suspense fallback={<div className="p-4">Loading dashboard…</div>}>
      <DashboardClient initialStats={stats} initialOrders={orders} />
    </Suspense>
  );
}
