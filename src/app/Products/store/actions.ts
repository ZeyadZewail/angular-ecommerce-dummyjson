import { createAction, props } from "@ngrx/store";
import { Product } from "../types/product.interface";

export const getProducts = createAction('[Products] Get Products',props<{pageNo:number,category:string}>());
export const getProductsSuccess = createAction('[Products] Get Products success',props<{products:Product[]}>()); 
export const getProductsFailure = createAction('[Products] Get Products failure',props<{error:string}>());
export const addToCart = createAction('[Products] Add to cart',props<{product:Product}>());
export const removeFromCart = createAction('[Products] Remove from cart',props<{product:Product}>());