import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../store/auth.store";
import { loginAction } from "../actions/login.action";
import { getUserById } from "../actions/getUserById.action";
import { toast } from "sonner";
import { useNavigate } from "react-router";

interface LoginData {
    username: string;
    password: string;
}


export const useLogin = () => {

    const setSession = useAuthStore((state) => state.setSession);
    const navigate = useNavigate();

    return useMutation({
        mutationFn: async ({ username, password }: LoginData) => {

            const authResponse = await loginAction(
                username,
                password
            );

            const user = await getUserById(authResponse.id);

            return {
                user,
                accessToken: authResponse.accessToken,
                refreshToken: authResponse.refreshToken,
            };
        },

        onSuccess: ({ user, accessToken, refreshToken }) => {
            toast.success("¡Bienvenido!");
            setSession(
                user,
                accessToken,
                refreshToken
            );
            navigate("/");
        },
        onError: () => {
            toast.error('Credenciales incorrectas');
        }
    });

}