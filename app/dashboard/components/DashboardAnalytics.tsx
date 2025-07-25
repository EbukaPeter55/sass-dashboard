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
import {RevenueDataPoint, SignupDataPoint} from '../shared/dashboard-types';

interface DashboardAnalyticsProps {
    revenueData: RevenueDataPoint[];
    signupData: SignupDataPoint[];
    kpiData: {
        mrr: string;
        ltv: string;
        arpu: string;
    };
}

export default function DashboardAnalytics({revenueData, signupData, kpiData}: DashboardAnalyticsProps) {
    const [selectedRange, setSelectedRange] = useState<string>('1year');

    return (
        <div className="flex flex-col gap-6 mt-[2rem]">
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

                <div className="w-full lg:w-1/3">
                    <Card className="h-full min-h-[22rem]">
                        <CardContent className="space-y-4">
                            {/* MRR */}
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <p className="text-muted-foreground text-xs">Monthly Recurring Revenue (MRR)</p>
                                    <p className="text-xl font-bold">{kpiData.mrr}</p> {/* Using dynamic mrr */}
                                </div>
                                <Image src={blueChart} alt="blueChart" width={45} height={30}/>
                            </div>
                            <hr/>
                            {/* LTV */}
                            <div className="flex items-center justify-between mb-6 mt-4">
                                <div>
                                    <p className="text-muted-foreground text-xs">Customer Lifetime Value (LTV)</p>
                                    <p className="text-xl font-bold">{kpiData.ltv}</p> {/* Using dynamic ltv */}
                                </div>
                                <Image src={pinkChart} alt="pinkChart" width={45} height={30}/>
                            </div>
                            <hr/>
                            {/* ARPU */}
                            <div className="flex items-center justify-between mt-4">
                                <div>
                                    <p className="text-muted-foreground text-xs">Average Revenue Per User (ARPU)</p>
                                    <p className="text-xl font-bold">{kpiData.arpu}</p> {/* Using dynamic arpu */}
                                </div>
                                <Image src={blueChart} alt="blueChart" width={45} height={30}/>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Signup vs Cancellations Chart */}
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
