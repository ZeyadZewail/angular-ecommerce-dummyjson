import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects"
import { catchError, from, map, of, switchMap } from "rxjs";
import { AuthService } from "../auth.service";
import * as authtActions from './actions'

@Injectable()
export class authEffects{
    getProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(authtActions.startLogin),switchMap((action)=> 
            from(this.authService.login(action.username,action.password)).pipe(
                map((user)=> authtActions.loginSuccessful({user})),
                catchError((error)=> of(authtActions.loginFailure({error})))
            ))
        )
    )
    constructor(private actions$:Actions,private authService:AuthService){}
}