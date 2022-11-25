import {Injectable} from "@angular/core";
import { Router } from "@angular/router";
import {Actions, createEffect, ofType} from "@ngrx/effects"
import { catchError, exhaustMap, from, map, of, switchMap, tap } from "rxjs";
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

    loginRedirect = createEffect(()=>{return this.actions$.pipe(ofType(authtActions.loginSuccessful),tap((action)=>{this.router.navigate(['/'])}))},{dispatch:false})
    
    constructor(private actions$:Actions,private authService:AuthService,private router:Router){}
}