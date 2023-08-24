import {ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon,} from 'lucide-react';
import {Table} from '@tanstack/react-table';

import {Button} from '@/components/common/ui/button';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from '@/components/common/ui/select';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  onChangeFunc?: (value: number, type: 'Page_change' | 'Size_change') => void,
  isClientPagination: boolean
}

export default function DataTablePagination<TData>({
  table,
  onChangeFunc,
  isClientPagination
}: DataTablePaginationProps<TData>) {
  if (isClientPagination) {
    return (
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    )
  }
  return (
    <div className=" flex items-center justify-between px-2 ml-auto">
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              // table.setPageSize(Number(value));
              if (onChangeFunc) {
                onChangeFunc(Number(value), 'Size_change')
              }
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[2, 10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => {
              if (onChangeFunc) {
                onChangeFunc(0, 'Page_change')
              }
              // table.setPageIndex(0)
            }}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => {
              if (onChangeFunc) {
                onChangeFunc(table.getState().pagination.pageIndex - 1, 'Page_change')
              }
              // table.previousPage()
            }

            }
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => {
              if (onChangeFunc) {
                onChangeFunc(table.getState().pagination.pageIndex + 1, 'Page_change')
              }
              // table.nextPage()
            }}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => {
              if (onChangeFunc) {
                onChangeFunc(table.getPageCount() - 1, 'Page_change')
              }
              // table.setPageIndex(table.getPageCount() - 1)
            }
            }
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

