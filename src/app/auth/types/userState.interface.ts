import { User } from "./user.interface";

export interface userState{
    user: User | null,
    isLoading: boolean,
    isLoggedIn: boolean,
    error: string | null,
}