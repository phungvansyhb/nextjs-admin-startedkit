import Link from 'next/link';
import {usePathname} from 'next/navigation';

import {cn} from '@/utils/tailwind/functions';
import {MenuItem} from '@/utils/constants/menu';
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from '../../common/ui/collapsible';
import {ChevronDown} from 'lucide-react';

type Props = {
  menus: MenuItem[];
};

const SidebarNav = ({ menus }: Props) => {
  const path = usePathname();

  if (!menus?.length) {
    return null;
  }

  return (
    <nav className='grid items-start gap-2'>
      {menus.map((item, index) => {
        return item.chidren ? (
          <Collapsible key={item.href}>
            <CollapsibleTrigger className='group flex w-full justify-between items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground'>
              <div className='flex '>
                {item.Icon} {item.title}
              </div>
              <ChevronDown className='text-foreground/50 w-3.5 h-3.5 transition-all group-data-[state=open]:rotate-90' />
            </CollapsibleTrigger>
            <CollapsibleContent className='pl-4 transition-all'>
              {item.chidren.map(chil => <Link key={chil.href} href={item.isDisable ? '' : chil.href}>
                <span
                  className={cn(
                    'peer flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                    path === chil.href ? 'bg-primary text-primary-foreground' : 'transparent',
                    item.isDisable && 'cursor-not-allowed opacity-40'
                  )}
                >
                  {chil.Icon}
                  <span>{chil.title}</span>
                </span>
              </Link>)}
            </CollapsibleContent>
          </Collapsible>
        ) : (
          <Link key={index} href={item.isDisable ? '' : item.href} >
            <span
              className={cn(
                'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                path === item.href ? 'bg-primary text-primary-foreground' : 'transparent',
                item.isDisable && 'cursor-not-allowed opacity-40 '
              )}
            >
              {item.Icon}
              <span>{item.title}</span>
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default SidebarNav;
