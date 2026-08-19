import { create } from "zustand";
import type { User } from "../../types/User.interface";

type AuthStatus =
    | 'checking'
    | 'authenticated'
    | 'not-authenticated';

interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    status: AuthStatus;
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
};

export const useAuthStore = create<AuthState & Actions>()((set) => ({
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
}));