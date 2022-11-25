import { createAction, props } from "@ngrx/store";
import { User } from "../types/user.interface";

export const startLogin = createAction('[Auth] Start Login',props<{username:string,password:string}>());
export const loginSuccessful = createAction('[Auth] Successful Login',props<{user:User}>());
export const loginFailure = createAction('[Auth] Failure Login',props<{error:string}>());