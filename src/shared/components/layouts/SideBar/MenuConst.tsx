import { DashboardIcon } from "@radix-ui/react-icons";
import { FormInputIcon, Table2Icon } from "lucide-react";
import { SidebarNavItem } from "./SidebarNav";

export const SIDEBAR_MENU: SidebarNavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        Icon: <DashboardIcon className="mr-2 h-5 w-5" />,
    },
    {
        title: 'Table',
        href: '/dashboard/table',
        Icon: <Table2Icon className="mr-2 h-5 w-5" />,
    },
    {
        title: 'Form',
        href: '/dashboard/form',
        Icon: <FormInputIcon className="mr-2 h-5 w-5" />,
    },

]