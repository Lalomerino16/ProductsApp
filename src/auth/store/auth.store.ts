import { create } from "zustand";
import type { User } from "../../types/User.interface";
import { persist } from "zustand/middleware";

type AuthStatus =
    | 'checking'
    | 'authenticated'
    | 'not-authenticated';

interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    status: AuthStatus;
    hasHydrated: boolean;
}

interface Actions {
    setSession: (
        user: User,
        accessToken: string,
        refreshToken: string
    ) => void;
    logOut: () => void;
}

const initialState: AuthState = {
    user: null,
    accessToken: null,
    refreshToken: null,
    status: 'checking',
    hasHydrated: false,
};

export const useAuthStore = create<AuthState & Actions>()(
    persist(
        (set) => ({
            ...initialState,
            setSession: (user, accessToken, refreshToken) => {
                set({
                    user,
                    accessToken,
                    refreshToken,
                    status: 'authenticated',
                });
            },
            logOut: () => {
                set({
                    user: null,
                    accessToken: null,
                    refreshToken: null,
                    status: 'not-authenticated',
                });
            },
        }),
        {
            name: "auth-storage",
        }
    )
)

// 👇 Fuera de la función creadora, después de que `create()` termina.
// Aquí `useAuthStore` ya está inicializado y `useAuthStore.persist` ya existe.
useAuthStore.persist.onFinishHydration((state) => {
    useAuthStore.setState({
        status: state.accessToken ? 'authenticated' : 'not-authenticated',
        hasHydrated: true,
    });
});

// 👇 Cubre el caso borde: si la hidratación ya terminó
// ANTES de que esta línea se ejecute (puede pasar con storage síncrono/HMR)
if (useAuthStore.persist.hasHydrated()) {
    const state = useAuthStore.getState();
    useAuthStore.setState({
        status: state.accessToken ? 'authenticated' : 'not-authenticated',
        hasHydrated: true,
    });
}