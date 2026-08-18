import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import type { User } from "@/types/User.interface";
import { LogOut, UserRound  } from 'lucide-react';
import { Switch } from "@/components/ui/switch"

interface ModalSettingProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
    user: User | null;
    logOut: () => void
}

export const ModalSetting = ({user, open, onOpenChange, logOut, children }: ModalSettingProps) =>  {

    return (
        <Popover  open={open} onOpenChange={onOpenChange}>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent className="w-75 p-3 ">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">

                        <div className="h-10 w-10 rounded-full bg-gray-300 border flex items-center justify-center">
                            <img src={user?.image} />
                        </div>
                        <div>
                            <h3>{user?.firstName} {user?.lastName}</h3>
                            <p className="text-sm text-red-500">{user?.email}</p>
                        </div>
                    </div>
                    <hr />
                    <ul className="flex flex-col gap-2 justify-center">
                        <li className="flex items-center">
                            <Switch id="airplane-mode" />
                        </li>
                        <li className="flex gap-2 font-medium cursor-pointer hover:bg-gray-200 rounded-md pl-2 pr-2 pt-2 pb-2">
                            <UserRound />
                            Profile
                        </li>
                        <li 
                            onClick={logOut}
                            className="flex gap-2 font-medium text-red-500 cursor-pointer hover:bg-gray-200 rounded-md pl-2 pr-2 pt-2 pb-2"
                        >
                            <LogOut />
                            Cerrar sesion
                        </li>
                    </ul>
                </div>
            </PopoverContent>
        </Popover>
    )
}
