import { Table } from '@tanstack/react-table';
import React from 'react'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { EyeIcon, TableIcon } from 'lucide-react';

interface DataTableHeaderProps<TData> {
    table: Table<TData>;
}

export default function DataTableHeader<TData>({
    table,
}: DataTableHeaderProps<TData>) {
    return (
        <div className="flex items-center py-4 gap-1 flex-wrap justify-end">
            {/* TODO any action here */}
            {
                table.getFilteredSelectedRowModel().rows.length > 0 && (
                    <div className="flex-1 text-sm text-muted-foreground mr-2">
                        {table.getFilteredSelectedRowModel().rows.length} of{' '}
                        {table.getFilteredRowModel().rows.length} row(s) selected.
                    </div>
                )
            }
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-auto">
                        <EyeIcon className="mr-2 h-4 w-4" /> View
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {table
                        .getAllColumns()
                        .filter(
                            (column) => column.getCanHide()
                        )
                        .map((column) => {
                            return (
                                <DropdownMenuCheckboxItem
                                    key={column.id}
                                    className="capitalize"
                                    checked={column.getIsVisible()}
                                    onCheckedChange={(value) =>
                                        column.toggleVisibility(!!value)
                                    }
                                >
                                    {column.id}
                                </DropdownMenuCheckboxItem>
                            )
                        })}
                </DropdownMenuContent>
            </DropdownMenu>
            {/* <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button className="ml-auto">
                            <FilterIcon />Lọc
                        </Button>

                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-4" align="end">
                        <div className="grid grid-cols-4 py-4 gap-4 ">
                            {table.getVisibleLeafColumns().map(column => {
                                const dataType = (column.columnDef.meta as { type: string })?.type;
                                if (column.getCanFilter()) {
                                    switch (dataType) {
                                        case COLUMNDATA_TYPE.BOOLEAN:
                                            return (
                                                <div className="flex flex-col gap-2">
                                                    <Label>{column.id}</Label>
                                                    <Select onValueChange={(e) => {
                                                        column?.setFilterValue(e)
                                                    }} value={column?.getFilterValue() as string}>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Chọn giá trị" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value={"true"}>Có</SelectItem>
                                                            <SelectItem value={"false"}>Không</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                            )
                                        case COLUMNDATA_TYPE.DATE:
                                            return (
                                                <div className="flex flex-col gap-2">
                                                    <Label>{column.id}</Label>
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <Button
                                                                variant={"outline"}
                                                                className={cn(
                                                                    "w-full pl-3 text-left font-normal",
                                                                    !column?.getFilterValue() && "text-muted-foreground"
                                                                )}
                                                            >
                                                                {column?.getFilterValue() ? (
                                                                    dayjs(column?.getFilterValue() as Date).format('DD/MM/YYYY')
                                                                ) : (
                                                                    <span>Chọn ngày</span>
                                                                )}
                                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                            </Button>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto p-0" align="start">
                                                            <Calendar
                                                                mode="single"
                                                                selected={column?.getFilterValue() as Date}
                                                                onSelect={column?.setFilterValue}
                                                                initialFocus
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                </div>

                                            )

                                        default:
                                            return (
                                                <div className="flex flex-col gap-2">
                                                    <Label>{column.id}</Label>
                                                    <Input
                                                        key={column.id}
                                                        placeholder={"Filter " + column.id}
                                                        value={(column?.getFilterValue() as string) ?? ""}
                                                        onChange={(event) =>
                                                            column?.setFilterValue(event.target.value)
                                                        }
                                                        className="max-w-sm"
                                                    />
                                                </div>
                                            );
                                    }
                                } else return <></>
                            })
                            }
                        </div>
                        <div className="flex justify-center gap-4">
                            <Button onClick={() => setColumnFilters([])}>Clear</Button>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu> */}

        </div>


    )
}