import DataTable from '@/shared/components/common/table/DataTable';
import DataTableColumnHeader from '@/shared/components/common/table/DataTableColumnHeader';
import { Checkbox } from '@/shared/components/common/ui/checkbox';
// import { DataTable } from '@/shared/components/common/table/DataTable'
import { ColumnDef } from '@tanstack/react-table';
import { User } from 'lucide-react';
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

    ];


    return (
        <div>
            <DataTable data={Users} tableName='student' columns={columns as any} />
        </div>
    )
}