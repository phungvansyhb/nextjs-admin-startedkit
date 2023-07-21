
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table"

import { Label } from "@radix-ui/react-dropdown-menu"
import dayjs from "dayjs"
import { CalendarIcon, FilterIcon, TableIcon } from "lucide-react"
import React from "react"
import { useLocalStorage } from 'usehooks-ts'
import { Button } from "@/shared/components/common/ui/button"
import { Calendar } from "@/shared/components/common/ui/calendar"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/shared/components/common/ui/dropdown-menu"
import { Input } from "@/shared/components/common/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/common/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/common/ui/select"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/shared/components/common/ui/table"
import { cn } from "@/shared/utils/tailwind/functions"
import DataTablePagination from "./DataTablePagination"
import DataTableHeader from "./DataTableHeader"


export const COLUMNDATA_TYPE = {
    STRING: 'string',
    DATE: 'date',
    BOOLEAN: 'boolean'
}


export interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    tableName: 'register' | 'student' | 'classroom'
}

function DataTable<TData, TValue>({
    columns,
    data,
    tableName,
}: DataTableProps<TData, TValue>) {
    const [columnVisibility, setColumnVisibility] = useLocalStorage(`findFinishDate::${tableName}::columnVisibility`, {})
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnVisibility,
            columnFilters
        }
    })

    return (
        <div className="">
            <DataTableHeader table={table} />
            <div className="rounded-md border w-full">
                <Table >
                    <TableHeader >
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody >
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="flex flex-wrap items-center justify-end space-x-2 py-4">
                <DataTablePagination table={table} />
            </div>
        </div>
    )
}
export default DataTable