import { ArrowDownIcon, ArrowUpIcon, ChevronsUpDownIcon, EyeIcon, SearchIcon, Settings2Icon } from 'lucide-react';
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
import { useEffect, useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Separator } from '../ui/separator';
import { useDebounce } from 'usehooks-ts';
import { Filter, Sort } from '@/shared/schemas/typedef/ISearchParams';
import classNames from 'classnames';

interface DataTableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
  defaultFilter?: any;
  defaultSort?: any;
}

const DataTableColumnHeader = <TData, TValue>({
  column,
  title,
  className,
  defaultFilter,
  defaultSort,
}: DataTableColumnHeaderProps<TData, TValue>) => {
  const [searchValue, setSearchValue] = useState<string >(defaultFilter);
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }
  const itemClassName = 'p-2 rounded-md flex gap-4 items-center hover:bg-foreground/5 cursor-pointer';
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant='ghost'
            size='sm'
            className={classNames('-ml-3 h-8 data-[state=open]:bg-accent', {
              'bg-accent': !!defaultFilter,
            })}
          >
            <span>{title}</span>
            <Settings2Icon className='ml-2 h-4 w-4' />
          </Button>
        </PopoverTrigger>
        <PopoverContent align='start' className='px-1 py-0'>
          <div onClick={() => column.toggleSorting(false)} className={itemClassName}>
            <ArrowUpIcon className='mr-2 h-3.5 w-3.5 text-muted-foreground/70' />
            Asc
          </div>
          <div onClick={() => column.toggleSorting(true)} className={itemClassName}>
            <ArrowDownIcon className='mr-2 h-3.5 w-3.5 text-muted-foreground/70' />
            Desc
          </div>
          {column.getCanHide() && (
            <div onClick={() => column.toggleVisibility(false)} className={itemClassName}>
              <EyeIcon className='mr-2 h-3.5 w-3.5 text-muted-foreground/70' />
              Hide
            </div>
          )}
          <div className={itemClassName}>
            <Input
              value={searchValue}
              onChange={v => {
                setSearchValue(v.target.value);
              }}

            />
            <Button
              onClick={() => {
                const metaCol = column?.columnDef.meta as any;
                if (metaCol.searchFn) {
                  metaCol.searchFn(searchValue);
                }
              }}
            >
              <SearchIcon />
            </Button>
            <Button
              variant={'destructive'}
              onClick={() => {
                setSearchValue('');
                const metaCol = column?.columnDef.meta as any;
                if (metaCol.searchFn) {
                  metaCol.searchFn(undefined);
                }
              }}
            >
              X
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DataTableColumnHeader;
