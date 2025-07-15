'use client';

import {
    flexRender,
    getCoreRowModel,
    ColumnDef,
    useReactTable,
    getSortedRowModel,
    getPaginationRowModel,
    SortingState,
} from '@tanstack/react-table';
import {useState} from 'react';
import {Button} from '../button';
import {ArrowUpDown} from 'lucide-react';
import {cn} from '@metallicjs/ui/lib/utils';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../select';

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    pagination?: boolean;
    hasTableTitle?: boolean;
    hasStatus?: boolean;
    tableTitle?: string;
    emptyTitle?: string;
    showUpAndDownArrows?: boolean;
    emptyDescription?: string;
    onRowClick?: (row: TData) => void;
}

export function DataTable<TData extends object, TValue>({
                                                            columns,
                                                            data,
                                                            hasTableTitle,
                                                            tableTitle,
                                                            pagination = true,
                                                            emptyTitle,
                                                            emptyDescription,
                                                            showUpAndDownArrows,
                                                            onRowClick,
                                                        }: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const table = useReactTable({
        data,
        columns: columns,
        state: {sorting},
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    /* ───────── ui helpers ───────── */
    const handleSearch = (query: string) => {
        console.log('search:', query);
    };

    return (
        <div className="border rounded-xl overflow-hidden bg-white">
            {/* Header */}
            <div className="flex flex-wrap gap-2 items-center justify-between px-4 py-3 border-b bg-muted/20">
                {hasTableTitle ? (
                    <h4 className="text-[1rem] font-semibold text-[var(--primary-text)]">
                        {tableTitle}
                    </h4>
                ) : null}
            </div>

            {/* Table / Empty state */}
            {data.length ? (
                <table className="w-full text-sm">
                    <thead className="bg-muted/40">
                    {table.getHeaderGroups().map((hg) => (
                        <tr key={hg.id} className="border-b">
                            {hg.headers.map((header) => (
                                <th key={header.id} className="px-4 py-3 text-left font-medium text-muted-foreground">
                                    {header.isPlaceholder ? null : (
                                        <div
                                            className={cn(
                                                'flex items-center gap-1',
                                                header.column.getCanSort() && 'cursor-pointer select-none',
                                            )}
                                            onClick={header.column.getToggleSortingHandler()}
                                        >
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                            {header.column.getCanSort() && (showUpAndDownArrows &&
                                                <ArrowUpDown className="w-4 h-4"/>)}
                                        </div>
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>

                    <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className="h-14 border-b hover:bg-muted/10 cursor-pointer"
                            onClick={() => onRowClick?.(row.original)}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="px-4 py-4 whitespace-nowrap">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <div className="py-20 text-center space-y-2">
                    <img src="/assets/dashboard/empty-icon.png" alt="" width={40} height={40}
                         className="opacity-60 mx-auto"/>
                    <h3 className="font-semibold">{emptyTitle || 'No Data'}</h3>
                    <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                        {emptyDescription || 'Nothing has been added yet.'}
                    </p>
                </div>
            )}

            {/* Pagination footer */}
            {pagination && (
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-3 gap-4">
                    <div className="flex items-center gap-2 text-sm">
                        <span>Show:</span>
                        <Select
                            value={table.getState().pagination.pageSize.toString()}
                            onValueChange={(v) => table.setPageSize(Number(v))}
                        >
                            <SelectTrigger className="w-[90px] h-8">
                                <SelectValue placeholder="Items"/>
                            </SelectTrigger>
                            <SelectContent>
                                {[5, 10, 20, 50].map((n) => (
                                    <SelectItem key={n} value={n.toString()}>
                                        {n}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                        {Array.from({length: table.getPageCount()}, (_, i) => (
                            <Button
                                key={i}
                                variant={table.getState().pagination.pageIndex === i ? 'default' : 'outline'}
                                size="sm"
                                className="w-8 h-8 p-0"
                                onClick={() => table.setPageIndex(i)}
                            >
                                {i + 1}
                            </Button>
                        )).slice(0, 5)}
                        {table.getPageCount() > 5 && <span className="px-1">…</span>}
                        <Button size="sm" variant="outline" onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}>
                            Prev
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}>
                            Next
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
