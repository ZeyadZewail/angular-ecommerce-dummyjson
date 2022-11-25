import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as authActions from '../store/actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private store:Store<AppStateInterface>){}

  attemptLogin():void {
    //Do nothing if there is no input
    if(this.username === '' || this.password === ''){
      return;
    }

    this.store.dispatch(authActions.startLogin({username:this.username,password:this.password}));

  }

}

