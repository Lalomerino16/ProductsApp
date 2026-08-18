import { CustomLogo } from "@/components/custom/CustomLogo"
import { useState } from "react";
import { PiMoonThin } from "react-icons/pi";
import { SunMedium  , User } from "lucide-react";
import { CartButton } from "../CartButton";
import { ModalSetting } from '@/shop/components/ModalSettings';
import { useThemeStore } from "@/store/theme.store";
import { useAuthStore } from "@/auth/store/auth.store";


export const CustomHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useThemeStore();
    const { user, logOut } = useAuthStore();
   
    
    return(
        <header className="w-full border-b sticky top-0 z-50 h-18 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-16 ">
                    
                    <CustomLogo subtittle="Shop" />

                    <div className="flex gap-15 items-center">

                        <ul className="flex items-center gap-4">
                            <li>
                                <span className="cursor-pointer h-12 w-12 rounded-full bg-muted text-foreground border-border border  flex items-center justify-center">
                                    <CartButton />
                                </span>
                            </li>
                            <li> 
                                <span  
                                    onClick={toggleTheme}
                                    className="cursor-pointer h-12 w-12 rounded-full bg-muted text-foreground border-border border  flex items-center justify-center"
                                >
                                    {theme == 'dark' ? <PiMoonThin size={20} /> : <SunMedium  />}
                                </span>
                            </li>
                        </ul>

                        <ModalSetting logOut={logOut} open={isOpen} onOpenChange={setIsOpen} user={user}>
                            <button
                                className="flex gap-4 hover:bg-background border rounded-md items-center px-3 py-2 cursor-pointer"
                            >
                            <div className="h-10 w-10 rounded-full bg-muted text-foreground border flex items-center justify-center">
                                <img 
                                    src={user?.image}
                                    alt={user?.firstName}
                                />
                                <User />
                            </div>
                                <p>{user?.firstName}</p>
                            </button>
                        </ModalSetting>
                        
                        

                    </div>

                </div>
            </div>
        </header>
    )
}