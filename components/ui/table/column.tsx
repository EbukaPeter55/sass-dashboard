'use client';

import {ColumnDef} from '@tanstack/react-table';
import {Badge} from '../badge'
import {Order} from "@/app/dashboard/shared/dashboard-types";


export type Transaction = {
    user: string | { name: string; username?: string; avatar?: string };
    transactionId: string;
    amount: string;
    provider: string;
    date: string;
    status: string;

    /* extra fields shown in the details modal (optional) */
    type?: string;
    sessionId?: string;
    time?: string;
    paymentMethod?: string;
    number?: string;
    network?: string;
};

/* ───── Shared status-pill cell helper ───── */
const statusCell =
    <T extends { status: string }>() =>
        ({row}: { row: { getValue: (k: string) => string } }) => {
            const status = row.getValue('status') as string;
            const colors: Record<string, string> = {
                Successful: 'bg-green-100 text-green-700',
                Pending: 'bg-yellow-100 text-yellow-700',
                Failed: 'bg-red-100 text-red-700',
                Disputed: 'bg-purple-100 text-purple-700',
                Refunded: 'bg-blue-100 text-blue-700',
            };
            return (
                <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                        colors[status] || ''
                    }`}
                >
        {status}
      </span>
            );
        };

export const orderColumns: ColumnDef<Order, unknown>[] = [
    {
        accessorKey: 'user',
        header: 'User',
        cell: ({row}) => {
            const u = row.original.user as
                | string
                | { name: string; username?: string; avatar?: string };

            if (typeof u === 'string') return u;

            return (
                <div className="flex items-center gap-2">
                    {u.avatar && (
                        <img
                            src={u.avatar}
                            alt={u.name}
                            className="w-6 h-6 rounded-full shrink-0"
                        />
                    )}
                    <div className="flex flex-col">
                        <span className="font-medium">{u.name}</span>
                        {u.username && (
                            <span className="text-xs text-muted-foreground">
                @{u.username}
              </span>
                        )}
                    </div>
                </div>
            );
        },
    },
    {accessorKey: 'totalAmount', header: 'Total Amount'},
    {accessorKey: 'discountedAmount', header: 'Total Amount After Discount'},
    {accessorKey: 'discount', header: 'Total Discount Amount'},
    {accessorKey: 'provider', header: 'Payment Provider'},
    {accessorKey: 'createdAt', header: 'Created At'},
    {accessorKey: 'status', header: 'Status', cell: statusCell<Order>()},
];
