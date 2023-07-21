
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/shared/utils/tailwind/functions';

interface SidebarNavProps {
  items: SidebarNavItem[];
}

export type NavItem = {
    title: string;
    href: string;
    disabled?: boolean;
  };
  

export type SidebarNavItem = {
    title: string;
    disabled?: boolean;
    external?: boolean;
    Icon?: React.ReactNode;
  } & (
    {
        href: string;
        items?: never;
      }
    | {
        href?: string;
        items: NavItem[];
      }
  );



const SidebarNav = ({ items }: SidebarNavProps) => {
  const path = usePathname();

  console.log(items);

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        return (
          item.href && (
            <Link key={index} href={item.disabled ? '/' : item.href}>
              <span
                className={cn(
                  'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                  path === item.href ? 'bg-accent' : 'transparent',
                  item.disabled && 'cursor-not-allowed opacity-80'
                )}
              >
                {item.Icon}
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
};

export default SidebarNav;
