import { Product } from "./product.interface";

export interface ProductsStateInterface{
    isLoading: boolean,
    products: Product[],
    error: string | null,
    cart: Product[]
}