import type { User } from "@/types/User.interface";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { LogOut, UserRound, LayoutDashboard   } from 'lucide-react';
import { Switch } from "@/components/ui/switch"
import { useNavigate } from "react-router";


interface ModalSettingProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
    user: User | null;
    logOut: () => void
}

export const ModalSetting = ({user, open, onOpenChange, logOut, children }: ModalSettingProps) =>  {
    const navigate = useNavigate();

    return (
        <Popover  open={open} onOpenChange={onOpenChange}>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent className="w-80 p-3 ">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">

                        <div className="h-10 w-10 rounded-full bg-gray-300 border flex items-center justify-center">
                            <img src={user?.image} />
                        </div>
                        <div>
                            <h3 className="font-bold">{user?.firstName} {user?.lastName}</h3>
                            <p className="text-sm ">{user?.email}</p>
                        </div>
                    </div>
                    <hr />
                    <ul className=" flex flex-col gap-2 justify-center">
                        <li className="flex items-center px-2 py-2">
                            <Switch 
                                id="airplane-mode" 
                                className="cursor-pointer"
                            />
                        </li>
                        <li className="flex gap-2 font-medium cursor-pointer hover:bg-gray-200 rounded-md px-2 py-2 hover:dark:bg-background">
                            <UserRound />
                            Profile
                        </li>
                        {user?.role === "admin" && (
                            <li 
                                className="flex gap-2 font-medium cursor-pointer hover:bg-gray-200 rounded-md px-2 py-2 hover:dark:bg-background"
                                onClick={() => navigate("/admin")}
                            >
                                <LayoutDashboard />
                                Inventario
                            </li>
                        )}
                        <li 
                            onClick={logOut}
                            className="flex gap-2 font-medium text-red-500 cursor-pointer hover:bg-gray-300 rounded-md pl-2 pr-2 pt-2 pb-2"
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
