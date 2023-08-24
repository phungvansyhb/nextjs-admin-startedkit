import {Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger} from "@/components/common/ui/menubar"
import {MenuItem} from "@/utils/constants/menu"
import Link from "next/link"

type Props = {
    menus: MenuItem[]
}
/* TODO : add responsive */
export function Horizontalbar({ menus }: Props) {
    return (
        <Menubar className="border-none hidden md:block" >
            {menus.map((item) =>
                <MenubarMenu key={item.href}>
                    {!item.chidren && <MenubarTrigger  >
                        <Link href={item.href} className="flex gap-1">
                            {item.Icon} {item.title}
                        </Link>
                    </MenubarTrigger>}
                    {item.chidren && <>
                        <MenubarTrigger>{item.title}</MenubarTrigger>
                        <MenubarContent>
                            {item.chidren.map(chil => <MenubarItem key={chil.href} >
                                <Link href={chil.href} className="flex gap-1" >
                                    {chil.Icon} {chil.title}
                                </Link>
                            </MenubarItem>)}

                        </MenubarContent>
                    </>}
                </MenubarMenu>
            )}
        </Menubar>
    )
}
