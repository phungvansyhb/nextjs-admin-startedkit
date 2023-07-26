
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

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/shared/components/common/ui/table"
import React, { useEffect } from "react"
import { useLocalStorage } from 'usehooks-ts'
import { Skeleton } from "../ui/skeleton"
import DataTableHeader from "./DataTableHeader"
import DataTablePagination from "./DataTablePagination"


export const COLUMNDATA_TYPE = {
    STRING: 'string',
    DATE: 'date',
    BOOLEAN: 'boolean'
}


export interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    tableName: string,
    isClientPagination?: boolean,
    isLoading: boolean
    pageSize: number,
    pageIndex: number,
    pageCount: number,
    handChangePagination: (value: number, type: 'Page_change' | 'Size_change') => void
}

function DataTable<TData, TValue>({
    columns,
    data,
    tableName,
    isClientPagination = false,
    pageCount,
    pageSize,
    pageIndex,
    isLoading,
    handChangePagination
}: DataTableProps<TData, TValue>) {
    const [columnVisibility, setColumnVisibility] = useLocalStorage(`${process.env.NEXT_PUBLIC_APP_NAME}::${tableName}::columnVisibility`, {})
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        manualPagination: !isClientPagination,
        pageCount: !isClientPagination ? pageCount : undefined,
        // autoResetPageIndex: true,
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
    useEffect(() => {
        if (!isClientPagination) {
            table.setPageSize(pageSize)
            table.setPageIndex(pageIndex)
        }
    }, [pageIndex, pageSize, isClientPagination, table])

    return <div className="">
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
                {
                    isLoading ? <TableBody>
                        {Array.from(Array(table.getState().pagination.pageSize).keys()).map(index => <TableRow key={index}>
                            <TableCell colSpan={columns.length} className="px-4">
                                <Skeleton className="w-full h-10 mx-2 rounded-xl" />
                            </TableCell>
                        </TableRow>)}
                    </TableBody>
                        :
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
                }
            </Table>
        </div>

        <div className="flex flex-wrap items-center justify-end space-x-2 py-4">
            <DataTablePagination table={table} onChangeFunc={handChangePagination} isClientPagination={isClientPagination} />
        </div>
    </div>



}
export default DataTable