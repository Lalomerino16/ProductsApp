import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type Theme = 'dark' | 'light';


interface themeState {
    theme: Theme;
    toggleTheme: () => void;
}


export const useThemeStore = create<themeState>()(
    
    devtools(
        persist(
    
            (set, get) => ({
        
                theme: 'light',
                
                toggleTheme: () => {
                    set({theme: get().theme === "light" ? "dark" : "light"}, false, "theme/toggle")
                },
        
            }), 
            {name: 'theme-storage',},
        ),

        {name: 'ThemeStore',}
    ), 
);

