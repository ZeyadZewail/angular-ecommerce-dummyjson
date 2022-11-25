import { userState } from "../auth/types/userState.interface";
import { ProductsStateInterface } from "../Products/types/productsState.interface";

export interface AppStateInterface{
    productsState:ProductsStateInterface,
    userState:userState,
}