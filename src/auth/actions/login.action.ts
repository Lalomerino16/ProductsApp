import { dummyApi } from "@/api/dummyApi";
import type { AuthResponse } from "../interfaces/auth.response";

export const loginAction = async (
  username: string,
  password: string
): Promise<AuthResponse> => {
    // eslint-disable-next-line no-useless-catch
    try {
        const { data } = await dummyApi.post<AuthResponse>('/auth/login', {
            username,
            password,
        });

        return data;

    } catch (error) {
        throw error;
    }
};