import { DashboardIcon } from "@radix-ui/react-icons";
import { ChurchIcon, FileClock, FolderGit2, GitPullRequest, PieChartIcon, Store, UserSquare, Users2 } from "lucide-react";


export type MenuItem = {
    title: string;
    permission?: boolean;
    external?: boolean;
    href: string
    Icon?: React.ReactNode;
    chidren?: MenuItem[]
    isDisable?: boolean
}


export const APP_MENU: MenuItem[] = [
    {
        title: 'WorkLog',
        href: '/worklog',
        Icon: <FileClock className="mr-2 h-5 w-5" />,
        // chidren: [
        //     {
        //         title: 'Table',
        //         href: '/dashboard/table',
        //         Icon: <Settings2Icon className="mr-2 h-5 w-5" />
        //     },
        //     {
        //         title: 'Form',
        //         href: '/dashboard/form',
        //         Icon: <TextIcon className="mr-2 h-5 w-5" />
        //     },
        //     {
        //         title: 'Form',
        //         href: '/dashboard/form1',
        //         Icon: <TextIcon className="mr-2 h-5 w-5" />
        //     }
        // ]
    },
    {
        title: 'Report',
        href: '/report',
        Icon: <PieChartIcon className="mr-2 h-5 w-5" />,
        // chidren: [
        //     {
        //         title: 'Table',
        //         href: '/dashboard/table',
        //         Icon: <Settings2Icon className="mr-2 h-5 w-5" />
        //     },
        //     {
        //         title: 'Form',
        //         href: '/dashboard/form',
        //         Icon: <TextIcon className="mr-2 h-5 w-5" />
        //     },
        //     {
        //         title: 'Form',
        //         href: '/dashboard/form1',
        //         Icon: <TextIcon className="mr-2 h-5 w-5" />
        //     }
        // ]
    },
    {
        title: 'User',
        href: '/user',
        Icon: <Users2 className="mr-2 h-5 w-5" />,
        // chidren: [
        //     {
        //         title: 'Table',
        //         href: '/dashboard/table',
        //         Icon: <Settings2Icon className="mr-2 h-5 w-5" />
        //     },
        //     {
        //         title: 'Form',
        //         href: '/dashboard/form',
        //         Icon: <TextIcon className="mr-2 h-5 w-5" />
        //     },
        //     {
        //         title: 'Form',
        //         href: '/dashboard/form1',
        //         Icon: <TextIcon className="mr-2 h-5 w-5" />
        //     }
        // ]
    },
    {
        title: 'Project',
        href: '/project',
        Icon: <FolderGit2 className="mr-2 h-5 w-5" />,
        // chidren: [
        //     {
        //         title: 'Table',
        //         href: '/dashboard/table',
        //         Icon: <Settings2Icon className="mr-2 h-5 w-5" />
        //     },
        //     {
        //         title: 'Form',
        //         href: '/dashboard/form',
        //         Icon: <TextIcon className="mr-2 h-5 w-5" />
        //     },
        //     {
        //         title: 'Form',
        //         href: '/dashboard/form1',
        //         Icon: <TextIcon className="mr-2 h-5 w-5" />
        //     }
        // ]
    },
    {
        title: 'Phase',
        href: '/phase',
        Icon: <GitPullRequest className="mr-2 h-5 w-5" />,
        // chidren: [
        //     {
        //         title: 'Table',
        //         href: '/dashboard/table',
        //         Icon: <Settings2Icon className="mr-2 h-5 w-5" />
        //     },
        //     {
        //         title: 'Form',
        //         href: '/dashboard/form',
        //         Icon: <TextIcon className="mr-2 h-5 w-5" />
        //     },
        //     {
        //         title: 'Form',
        //         href: '/dashboard/form1',
        //         Icon: <TextIcon className="mr-2 h-5 w-5" />
        //     }
        // ]
    },
    {
        title: 'Job Position',
        href: '/job-position',
        Icon: <UserSquare className="mr-2 h-5 w-5" />,
    },
    {
        title: 'Department',
        href: '/department',
        Icon: <Store className="mr-2 h-5 w-5" />,
    },


]