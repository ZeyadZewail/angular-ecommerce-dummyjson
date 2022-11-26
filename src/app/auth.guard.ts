import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loggedInSelector } from './auth/store/selectors';
import { AppStateInterface } from './types/appState.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  loggedin = false;

  //keeps track of logged in status in state
  constructor(private store:Store<AppStateInterface>){
    store.select(loggedInSelector).subscribe(val => { 
      this.loggedin = val;
    });
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loggedin;
  }
  
}
