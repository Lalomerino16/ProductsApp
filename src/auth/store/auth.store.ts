import { create } from "zustand";
import type { User } from "../../types/User.interface";
import { loginAction } from "../actions/login.action";

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated'

interface AuthState {
    user: User | null;
    token: string | null;
    status: AuthStatus;
}

interface Actions {
    login: (username: string, password: string) => Promise<boolean>
    logOut: () => void;
}

const initialState: AuthState = {
    user: null,
    token: null,
    status: 'checking',
}

export const useAuthStore = create<AuthState & Actions>()((set) => ({
    ...initialState,

    login: async(username: string, password: string) => {
        const data = await loginAction(username, password);
        localStorage.setItem('token', data.token);

        set({ user: data, token: data.token, status: 'authenticated' });

        return true;
    },

    logOut: () => {
        localStorage.removeItem('token')
        set({user: null, token: null, status: 'not-authenticated'})
    },

}));