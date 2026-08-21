import { Outlet } from "react-router";
import { CustomAside } from "../components/custom/CustomAside";
import { CustomHeaderAdmin } from "../components/custom/CustomHeaderAdmin";


export const DashboardAdminLayout = () => {

    return (
        <section className="flex min-h-screen">

            <CustomAside />
            <section className="w-full">
                <CustomHeaderAdmin />
                <section className="pl-2 h-full w-full">
                    <Outlet />
                </section>
            </section>
        </section>
    );
}