'use client';

import { ReactNode } from 'react';
import { Card, CardContent } from './card';


interface StatCardProps {
    icon?: ReactNode;
    title: string;
    value: string | number;
    change?: string;
    changeColor?: string;
    subText?: string;
    boldTitle?: boolean;
}

export default function DashboardCard({
                                     icon,
                                     title,
                                     value,
                                     change,
                                     changeColor = 'text-slate-500',
                                     subText = 'this week',
                                     boldTitle = true,
                                 }: StatCardProps) {
    return (
        <Card className="shadow-sm w-full flex-1">
            <CardContent className="p-4 space-y-3">
                <div className="flex items-center space-x-2">
                    {icon && <div className="text-[var(--background-primary)]">{icon}</div>}
                    <div className={boldTitle ? 'font-medium text-slate-800' : 'text-slate-800'}>
                        {title}
                    </div>
                </div>
                <div className="text-3xl font-bold text-slate-900">{value}</div>
                {change && (
                    <div className="text-sm flex items-center space-x-1">
                        <span className={`${changeColor} font-medium`}>{change}</span>
                        <span className="text-slate-500">{subText}</span>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
