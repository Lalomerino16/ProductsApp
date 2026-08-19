import { Outlet } from "react-router"


 
export const AuthLayout = () => {


    return(
        <section
              style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} className="border-2"
    >
            <div style={{width: '100%', }}>
                <Outlet />
            </div>
        </section>
    )
}