import { createAction, props } from "@ngrx/store";
import { Product } from "../types/product.interface";

export const getProducts = createAction('[Products] Get Products',props<{pageNo:number,category:string}>());
export const getProductsSuccess = createAction('[Products] Get Products success',props<{products:Product[]}>()); 
export const getProductsFailure = createAction('[Products] Get Products failure',props<{error:string}>()); 