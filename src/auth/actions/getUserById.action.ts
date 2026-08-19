import { dummyApi } from "@/api/dummyApi";
import type { User } from "@/types/User.interface";



export const getUserById = async(id: number): Promise<User> => {

    const { data } = await dummyApi.get<User>(`/users/${id}`)

    return data;
}