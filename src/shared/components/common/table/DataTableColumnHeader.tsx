import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronsUpDownIcon,
  EyeIcon,
  SearchIcon,
} from 'lucide-react';
import { Column } from '@tanstack/react-table';

import { Button } from '@/shared/components/common/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/common/ui/dropdown-menu';
import { cn } from '@/shared/utils/tailwind/functions';
import { Input } from '../ui/input';

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

const DataTableColumnHeader = <TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) => {
  
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-accent"
          >
            <span>{title}</span>
            {column.getIsSorted() === 'desc' && (
              <ArrowDownIcon className="ml-2 h-4 w-4" />
            )}
            {column.getIsSorted() === 'asc' && (
              <ArrowUpIcon className="ml-2 h-4 w-4" />
            )}
            {
              !column.getIsSorted() && <ChevronsUpDownIcon className="ml-2 h-4 w-4" />
            }
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {
            column.getCanHide() &&

            <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
              <EyeIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              Hide
            </DropdownMenuItem>
          }
          {column.getCanFilter() &&
            <DropdownMenuItem className='flex '>
              <SearchIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" /> <Input />
            </DropdownMenuItem>
          }
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DataTableColumnHeader;
