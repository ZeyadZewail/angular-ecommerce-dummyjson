import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logOut } from '../auth/store/actions';
import { loggedInSelector } from '../auth/store/selectors';
import { AppStateInterface } from '../types/appState.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLoggedIn$:Observable<boolean>;

  constructor(private store:Store<AppStateInterface>,private router:Router){
    this.isLoggedIn$ = store.select(loggedInSelector);
  }

  logOut():void{
    this.store.dispatch(logOut());
  }

  navigate(url:string):void{
    this.router.navigate([url]);
  }

}
