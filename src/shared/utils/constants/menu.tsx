import { DashboardIcon } from "@radix-ui/react-icons";
import { ChurchIcon, Database, FileClock, FolderGit2, FormInputIcon, GitPullRequest, PieChartIcon, Store, Table, Text, UserSquare, Users2 } from "lucide-react";


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
        title: 'Demo',
        href: '/Dashboard',
        Icon: <Database className="mr-2 h-5 w-5" />,
        chidren: [
            {
                title: 'Table',
                href: '/dashboard/table',
                Icon: <Table className="mr-2 h-5 w-5" />
            },
            {
                title: 'Form',
                href: '/dashboard/form',
                Icon: <FormInputIcon className="mr-2 h-5 w-5" />
            },
            {
                title: 'Editor',
                href: '/dashboard/editor',
                Icon: <Text className="mr-2 h-5 w-5" />
            }
        ]
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