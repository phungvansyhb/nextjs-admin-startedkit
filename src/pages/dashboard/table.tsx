import DataTable from '@/shared/components/common/table/DataTable';
import DataTableColumnHeader from '@/shared/components/common/table/DataTableColumnHeader';
import { Button } from '@/shared/components/common/ui/button';
import { Checkbox } from '@/shared/components/common/ui/checkbox';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/shared/components/common/ui/dropdown-menu';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
// import { DataTable } from '@/shared/components/common/table/DataTable'
import { ColumnDef } from '@tanstack/react-table';
import { Edit, MoreHorizontal, Trash2, User } from 'lucide-react';
import React from 'react'

type Props = {}
type User = {
    id: React.Key,
    name: string,
    age: number,
    active: boolean
}

export default function table({ }: Props) {

    const Users = [
        {
            id: 1,
            name: 'sy',
            age: 18,
            active: true
        },
        {
            id: 2,
            name: 'thuan',
            age: 20,
            active: true
        },
        {
            id: 3,
            name: 'dung',
            age: 21,
            active: true
        },
    ]
    const columns: ColumnDef<User>[] = [
        // {
        //     accessorKey: "status",
        //     header: "Khả dụng",
        //     id: "Khả dụng",
        //     cell: ({ row }) => <ActiveAction row={row.original} />,
        //     meta: { type: COLUMNDATA_TYPE.BOOLEAN },
        //     filterFn: (row, _y, value) => {
        //         let tmp = false;
        //         if (value === 'true') tmp = true;
        //         if (tmp === row.original.status) return true;
        //         else return false
        //     },
        // },
        {
            id: 'select',
            header: ({ table }) => (
                <Checkbox
                    checked={table.getIsAllPageRowsSelected()}
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    className="ml-2"
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            id: "Tên",
            accessorKey: "name",
            header: ({ column }) => <DataTableColumnHeader column={column} title="Tên người dùng" />,

        },
        {
            id: "Tuổi",
            accessorKey: "age",
            header: "Tuổi"
        },
        {
            id: 'actions',
            
            cell: ({ row }) => {
                const record = row.original;
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem className="cursor-pointer">
                                <Edit className="mr-2 h-4 w-4" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={() => navigator.clipboard.writeText(JSON.stringify(record, null, 2))}
                            >
                                Copy
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },

    ];


    return (
        <div>
            <DataTable data={Users} tableName='student' columns={columns as any} />
        </div>
    )
}