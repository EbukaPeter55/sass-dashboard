import { orderData } from '@/app/dashboard/shared/dashboard-constant';
import {Order} from "@/app/dashboard/shared/dashboard-types";

export async function fetchDashboardStats() {
  const res = await fetch('https://example.com/api/stats', { cache: 'no-store' })
    .then(r => r.json())
    .catch(() => null);

  /* fallback to zeros when the real API isn’t available yet */
  return res ?? {
    newUsers: 0,
    activeSubscriptions: 0,
    churnRate: '0%',
    failedPayments: 0,
  };
}

/** orders section under the table */
export async function fetchLatestOrders(): Promise<Order[]> {
  await new Promise(r => setTimeout(r, 400));
  return orderData;
}
