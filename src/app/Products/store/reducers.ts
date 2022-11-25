import { createReducer, on } from "@ngrx/store";
import { ProductsStateInterface } from "src/app/Products/types/productsState.interface";
import * as ProductActions from './actions'

export const inititalState:ProductsStateInterface = {
    isLoading: false,
    products: [],
    error: null,
};

export const productReducers = createReducer(inititalState, 
    on(ProductActions.getProducts,(state) => ({...state,isLoading:true})),
    on(ProductActions.getProductsSuccess,(state,action) => ({...state,isLoading:false,products:action.products})),
    on(ProductActions.getProductsFailure,(state,action) => ({...state,isLoading:false,error:action.error})),
) 