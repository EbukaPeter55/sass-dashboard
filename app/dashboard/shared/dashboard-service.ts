import {FullDashboardData} from './dashboard-types';
import {MOCK_FULL_DASHBOARD_DATA} from "@/app/dashboard/shared/dashboard-constant";

const NEXT_PUBLIC_DOMAINS_API_URL = process.env.NEXT_PUBLIC_DOMAINS_API_URL;

if (!NEXT_PUBLIC_DOMAINS_API_URL) {
    console.error("NEXT_PUBLIC_DOMAINS_API_URL is not defined in .env.local or environment variables.");
    throw new Error("Missing NEXT_PUBLIC_DOMAINS_API_URL environment variable.");
}

const MERGED_DASHBOARD_BIN_URL = `${NEXT_PUBLIC_DOMAINS_API_URL}/latest`;


export async function fetchFullDashboardData(): Promise<FullDashboardData> {
    try {
        const response = await fetch(MERGED_DASHBOARD_BIN_URL, {
            next: {
                revalidate: 3600 // Revalidate data every hour (Incremental Static Regeneration)
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Failed to fetch dashboard data from JSON Bin: ${response.status} ${response.statusText}, Body: ${errorText}`);
            throw new Error(`Failed to fetch dashboard data: ${response.statusText}`);
        }

        const data = await response.json();
        return data?.record;

    } catch (error) {
        console.error("Error fetching full dashboard data from JSON Bin:", error);
        return MOCK_FULL_DASHBOARD_DATA;
    }
}
