import { dummyApi } from "@/api/dummyApi";
import type { AuthResponse } from "../interfaces/auth.response";

export const loginAction = async (
  username: string,
  password: string
): Promise<AuthResponse> => {

    const { data } = await dummyApi.post<AuthResponse>('/auth/login', {
        username,
        password,
    });
    
    return data;
};