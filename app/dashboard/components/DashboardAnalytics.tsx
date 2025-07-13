'use client';

import {useState} from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend,
} from 'recharts';
import blueChart from '../../../public/dashboard/monthly-recurring.png';
import pinkChart from '../../../public/dashboard/customer-lifeline.png';
import Image from 'next/image';
import dollarBag from '../../../public/dashboard/dollar-bag.png';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";


const revenueData = [
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
];

const signupData = [
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
];

export default function DashboardAnalytics() {
    const [selectedRange, setSelectedRange] = useState<string>('1year');

    return (
        <div className="flex flex-col gap-6 mt-[2rem]">
            {/* Revenue + KPI layout wrapper */}
            <div className="flex flex-col lg:flex-row gap-6 items-start">
                {/* Revenue Chart */}
                <Card className="w-full lg:w-2/3">
                    <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                        <CardTitle className="flex items-center gap-2">
                            <Image src={dollarBag} alt="dollarBag"/>
                            <span>Revenue</span>
                        </CardTitle>

                        {/* Time Range Filters */}
                        <ToggleGroup
                            type="single"
                            value={selectedRange}
                            onValueChange={(val) => setSelectedRange(val || '1year')}
                            className="w-full sm:w-auto flex-wrap justify-start sm:justify-end"
                        >
                            <ToggleGroupItem value="7days">7 days</ToggleGroupItem>
                            <ToggleGroupItem value="1month">1 Month</ToggleGroupItem>
                            <ToggleGroupItem value="1year">1 Year</ToggleGroupItem>
                            <ToggleGroupItem value="all">All Time</ToggleGroupItem>
                            <ToggleGroupItem value="custom">Custom</ToggleGroupItem>
                        </ToggleGroup>
                    </CardHeader>
                    <CardContent className="h-[22rem]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={revenueData}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="month"/>
                                <YAxis/>
                                <Tooltip/>
                                <Legend/>
                                <Line type="monotone" dataKey="revenue" stroke="var(--analytics-primary)"
                                      strokeWidth={2}/>
                                <Line type="monotone" dataKey="ltv" stroke="var(--analytics-secondary)"
                                      strokeDasharray="5 5"/>
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* KPI Cards */}
                <div className="w-full lg:w-1/3">
                    <Card className="h-full min-h-[22rem]">
                        <CardContent className="space-y-4">
                            {/* MRR */}
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <p className="text-muted-foreground text-xs">Monthly Recurring Revenue (MRR)</p>
                                    <p className="text-xl font-bold">$5,276.33</p>
                                </div>
                                <Image src={blueChart} alt="blueChart" width={45} height={30}/>
                            </div>
                            <hr/>
                            {/* LTV */}
                            <div className="flex items-center justify-between mb-6 mt-4">
                                <div>
                                    <p className="text-muted-foreground text-xs">Customer Lifetime Value (LTV)</p>
                                    <p className="text-xl font-bold">$5,276.33</p>
                                </div>
                                <Image src={pinkChart} alt="pinkChart" width={45} height={30}/>
                            </div>
                            <hr/>
                            {/* ARPU */}
                            <div className="flex items-center justify-between mt-4">
                                <div>
                                    <p className="text-muted-foreground text-xs">Average Revenue Per User (ARPU)</p>
                                    <p className="text-xl font-bold">$5,276.33</p>
                                </div>
                                <Image src={blueChart} alt="blueChart" width={45} height={30}/>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Signup vs Cancellations */}
            <Card>
                <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <CardTitle className="text-[1rem] font-semibold text-[var(--primary-text)]">Signups vs
                        Cancellation</CardTitle>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[var(--analytics-primary)]"/>
                            <span className="text-sm text-muted-foreground">New Signups</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[var(--analytics-secondary)]"/>
                            <span className="text-sm text-muted-foreground">Cancellations</span>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={signupData}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="month"/>
                            <YAxis/>
                            <Tooltip/>
                            <Bar dataKey="signups" fill="var(--analytics-primary)"/>
                            <Bar dataKey="cancellations" fill="var(--analytics-secondary)"/>
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    );
}
