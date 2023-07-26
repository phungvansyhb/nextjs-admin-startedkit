import LanguageSwitcher from '../business/LanguageSwitch';
import ThemeModeToggle from '../business/ToggleThemeMode';
import type { Metadata } from 'next';
import SidebarNav from './SideBar/SidebarNav';
import Link from 'next/link';
import Image from 'next/image';
import { Horizontalbar } from './HorizontalBar/HorizontalBar';
import { APP_MENU } from '@/shared/utils/constants/menu';
import { MENULAYOUT } from '@/Settings';
import { Button } from '../common/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../common/ui/sheet';
import AccountSetting from '../business/AccountSetting';

export const metadata: Metadata = {
    title: 'Admin dashboard',
    description: 'Admin dashboard',
};

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <header className='w-full sticky top-0 z-40  border-b bg-background'>
                <div className='w-full flex-wrap flex h-20 items-center justify-between px-2 lg:px-8 py-4'>
                    <div className='flex items-center  gap-2 lg:gap-4'>
                        <div className='lg:hidden'>
                            <Sheet >
                                <SheetTrigger asChild >
                                    <Button className='lg:hidden' variant={'outline'} size={'sm'}><Menu /></Button>
                                </SheetTrigger>
                                <SheetContent className="w-[200px]" side={'left'}>
                                    <SidebarNav menus={APP_MENU} />
                                </SheetContent>
                            </Sheet>
                        </div>
                        <Link href='/' className='items-center space-x-2 flex'>
                            <Image src='/ngsLogo.png' width={48} height={48} alt='Logo' />
                            <span className='font-bold text-2xl sm:inline-block'>{process.env.NEXT_PUBLIC_APP_NAME}</span>
                        </Link>
                        {MENULAYOUT === 'horizontal' && <Horizontalbar menus={APP_MENU} />}
                    </div>
                    <div>
                        {/* <LanguageSwitcher /> */}
                        <AccountSetting />
                        <span className='ml-[20px]'>
                            <ThemeModeToggle />
                        </span>
                    </div>
                </div>
            </header>
            {MENULAYOUT === 'vertical' && (
                <div className='mt-0 flex gap-4 w-full '>
                    <aside className='min-w-[200px] hidden md:block flex-col bg-primary-foreground/5  py-4 px-2 sticky top-[65px]   
                        h-[calc(100vh_-_65px)] overflow-y-auto '>
                        <SidebarNav menus={APP_MENU} />
                    </aside>
                    <main className='flex flex-grow flex-wrap overflow-hidden p-2 lg:p-12 border-l'>{children}</main>

                </div>
            )}
            {MENULAYOUT === 'horizontal' && (
                <div className='p-10'>
                    <main className='w-full overflow-hidden p-2 lg:p-12'>{children}</main>
                </div>
            )}
        </>


    );
};

export default DashBoardLayout;
