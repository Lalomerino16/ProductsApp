import type { PropsWithChildren } from "react";
import { Navigate } from "react-router";
import { useAuthStore } from "../../auth/store/auth.store";



export const NotAuthenticatedRoute = ({ children }: PropsWithChildren) => {

    //Preguntamos a zustand si existe un usuario
    const isAuthenticated = useAuthStore(
        (state) => state.user !== null
    );

    if(isAuthenticated ) return <Navigate to="/" replace/>

    return children
    
}

export const AuthenticatedRoute = ({ children }: PropsWithChildren) => {

    const isAuthenticated = useAuthStore(
        (state) => state.user !== null
    );


    if(!isAuthenticated) return <Navigate to="/auth/login" replace />


    return children
    
}