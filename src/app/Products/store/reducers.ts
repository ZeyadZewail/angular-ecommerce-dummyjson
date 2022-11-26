import { act } from "@ngrx/effects";
import { createReducer, on } from "@ngrx/store";
import { ProductsStateInterface } from "src/app/Products/types/productsState.interface";
import * as ProductActions from './actions'
import * as AuthActions from '../../auth/store/actions'

export const inititalState:ProductsStateInterface = {
    isLoading: false,
    products: [],
    error: null,
    cart:[]
};

export const productReducers = createReducer(inititalState, 
    on(ProductActions.getProducts,(state) => ({...state,isLoading:true})),
    on(ProductActions.getProductsSuccess,(state,action) => ({...state,isLoading:false,products:action.products})),
    on(ProductActions.getProductsFailure,(state,action) => ({...state,isLoading:false,error:action.error})),
    on(ProductActions.addToCart,(state,action) => ({...state,cart:[...state.cart,action.product]})),
    on(ProductActions.removeFromCart,(state,action) => ({...state,cart:state.cart.filter((item)=> {return item != action.product})})),
    on(AuthActions.logOut,(state)=>inititalState)
) 