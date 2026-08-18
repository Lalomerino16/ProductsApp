import { Outlet } from "react-router"


 
export const AuthLayout = () => {


    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', }}>
            <div style={{width: '100%', }}>
                <Outlet />
            </div>
        </div>
    )
}