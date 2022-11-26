import { Component, Input } from '@angular/core';
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

  searchKeyword='';

  constructor(private store:Store<AppStateInterface>,private router:Router){
    this.isLoggedIn$ = store.select(loggedInSelector);
  }

  //uses logOut action to logout user
  logOut():void{
    this.store.dispatch(logOut());
  }

  //angular router navigator to not lose state
  navigate(url:string):void{
    this.router.navigate([url]);
  }

  //searches for the keyword in the search bar making use of queryparam parsing
  search():void{
    let url =  "/products/"
    this.router.navigate([url],{queryParams:{search:this.searchKeyword,page:1}});
  }

}
