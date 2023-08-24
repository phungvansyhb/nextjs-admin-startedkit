import {ConfirmDialog} from '@/components/common/dialog/ConfirmDialog';
import DataTable from '@/components/common/table/DataTable';
import DataTableColumnHeader from '@/components/common/table/DataTableColumnHeader';
import {Button} from '@/components/common/ui/button';
import {Checkbox} from '@/components/common/ui/checkbox';
import {
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/common/ui/dropdown-menu';
import {IArticle, useGetListArticle} from '@/schemas/models/IArticle';
import {DropdownMenu} from '@radix-ui/react-dropdown-menu';
import {ColumnDef} from '@tanstack/react-table';
import {Edit, MoreHorizontal, Trash2} from 'lucide-react';
import React from 'react'

type Props = {}


export default function Table({ }: Props) {
    const TABLE_NAME = 'Article'
    const { data, onChangeSearchParams, tableConfig, getFieldValueOnSearchParam2 } = useGetListArticle()
    const columns: ColumnDef<IArticle>[] = [

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
            accessorKey: "title",
            header: ({ column }) => <DataTableColumnHeader column={column} title="Tên" defaultFilter={getFieldValueOnSearchParam2('title')} />,
            meta: {
                searchFn: (value: string) => {
                    onChangeSearchParams({
                        field: 'title',
                        fieldType: 'STRING',
                        op: 'LIKE',
                        value: value
                    })
                }
            }
        },
        {
            id: "Mo ta",
            accessorKey: "description",
            header: ({ column }) => <DataTableColumnHeader column={column} title="Mô tả " />,
            meta: {
                searchFn: (value: string) => { console.log(value) }
            }
        },
        {
            id: 'actions',
            header: "Action",
            cell: ({ row }) => {
                const record = row.original;
                return (
                    <DropdownMenu >
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem className="cursor-pointer pl-4 font-medium">
                                <Edit className="mr-2 h-4 w-4" /> Edit
                            </DropdownMenuItem>

                            <ConfirmDialog
                                triggerCpn={<Button variant={'ghost'} className='justify-start w-full' >
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete
                                </Button>}
                                title="Xóa "
                                content="Chắc chắn Xóa"
                                onOk={() => console.log('pressed')}
                            />

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
            <DataTable
                data={data?.data.content || []}
                columns={columns}
                tableName={TABLE_NAME}
                {...tableConfig}
            />
        </div>
    )
}