


export interface User {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    image: string;
    gender: string;
    role: Role;
}

type Role = "admin" | "moderator" | "user";