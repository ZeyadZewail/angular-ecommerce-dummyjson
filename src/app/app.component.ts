import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loggedInSelector } from './auth/store/selectors';
import { AppStateInterface } from './types/appState.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ecommerce-dummyjson';
  isLoggedIn$:Observable<boolean>;

  //keeps track of logged in status in state
  constructor(private store:Store<AppStateInterface>){
    this.isLoggedIn$ = store.select(loggedInSelector);
  }

}
