
import { logout } from '@/shared/stores/appSlice';
import { User2, UserCircle } from 'lucide-react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { Button } from '../common/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../common/ui/dropdown-menu';


const AccountSetting = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    function handleLogout() {
        router.push('/login')
        dispatch(logout())
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <User2 className="h-[1.2rem] w-[1.2rem] " />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleLogout()}>
                    Logout
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default AccountSetting;
