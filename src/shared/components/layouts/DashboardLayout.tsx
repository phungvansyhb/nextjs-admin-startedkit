import LanguageSwitcher from '../business/LanguageSwitch';
import ThemeModeToggle from '../business/ToggleThemeMode';
import type { Metadata } from 'next';
import SidebarNav from './SideBar/SidebarNav';
import { SIDEBAR_MENU } from './SideBar/MenuConst';
import Link from 'next/link';
import Image from 'next/image';
import { Horizontalbar } from './HorizontalBar/HorizontalBar';


export const metadata: Metadata = {
    title: 'Admin dashboard',
    description: 'Admin dashboard',
};

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section>
            <div className="flex min-h-screen flex-col space-y-6">
                <header className="sticky top-0 z-40 border-b bg-background">
                    <div className="flex h-16 items-center justify-between py-4 px-8">
                        <div className='flex gap-4 items-center'>
                            <Link href="/" className="hidden items-center space-x-2 md:flex">
                                <Image src="/logo_single.svg" width={48} height={48} alt="Logo" />
                                <span className="hidden font-bold sm:inline-block">
                                    {/* {siteConfig.name} */}
                                </span>
                            </Link>
                            <Horizontalbar />
                        </div>
                        <div>
                            <LanguageSwitcher />
                            <span className="ml-[20px]">
                                <ThemeModeToggle />
                            </span>
                        </div>

                    </div>
                </header>
                <div className="p-10">
                    {/* enable if mode === sidebar */}
                    {/*  <aside className="w-[200px] flex-col md:flex pl-8">
                        <SidebarNav items={SIDEBAR_MENU} />
                    </aside> */}
                    <main className="col-span-12 flex w-full flex-1 flex-col overflow-hidden px-2">
                        {children}
                    </main>
                </div>
            </div>
        </section>
    );
};

export default DashBoardLayout;
