import { createReducer, on } from "@ngrx/store";
import { userState } from "../types/userState.interface";
import * as AuthActions from './actions'

export const inititalState:userState = {
    user:null,
    isLoading:false,
    isLoggedIn:false,
    error:null,
}

export const authReducers = createReducer(inititalState, 
    on(AuthActions.startLogin,(state) => ({...state,isLoading:true})),
    on(AuthActions.loginSuccessful,(state,action) => ({...state,isLoading:false,isLoggedIn:true,user:action.user,error:null})),
    on(AuthActions.loginFailure,(state,action) => ({...state,isLoading:false,error:action.error})),
) 