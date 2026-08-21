import type { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router";
import { useAuthStore } from "../../auth/store/auth.store";



export const AuthenticatedRoute = ({ children }: PropsWithChildren) => {

    const status = useAuthStore((state) => state.status);
    const hasHydrated = useAuthStore((state) => state.hasHydrated);
    const location = useLocation();
   
    if (!hasHydrated) {
        return <div>Verificando sesión...</div>;
    }
   

    switch (status) {
        case "authenticated":
            return children;
        case "not-authenticated":
            return <Navigate to="/auth/login" state={{ from: location }} replace />;

        case "checking":
        default:
            return <div>Verificando sesión...</div>;
    }
};


export const PublicOnlyRoute = ({ children }: PropsWithChildren) => {
    const status = useAuthStore((state) => state.status);
    const hasHydrated = useAuthStore((state) => state.hasHydrated);


    if (!hasHydrated || status === "checking") {
        return <div>Verificando sesión...</div>;
    }

    if (status === "authenticated") {
        return <Navigate to="/" replace />;
    }

    return children;




}

export const AdminRoute = ({ children }: PropsWithChildren) => {
    const status = useAuthStore((state) => state.status);
    const hasHydrated = useAuthStore((state) => state.hasHydrated);
    const user = useAuthStore((state) => state.user);

    if (!hasHydrated || status === "checking") {
        return <div>Verificando sesión...</div>;
    }

    // No logueado -> a login
    if (status === "not-authenticated") {
        return <Navigate to="/auth/login" replace />;
    }

    // Logueado pero no es admin -> al home
    if (user?.role !== "admin") {
        return <Navigate to="/" replace />;
    }

    return children;
};