import { SideMenu } from "@/components/shared/SidebarMenu"
import { Outlet } from "react-router"





export const DashboardLayout = () => {

    <div className="bg-slate-200 overflow-y-scroll w-screen h-screen antialiased text-slate-900 selection:bg-blue-900 selection:text-white">
        <div className="flex flex-row relative w-screen">
            <SideMenu />

            <div className="w-full p-4">
                <Outlet />
            </div>
        </div>

    </div>
}