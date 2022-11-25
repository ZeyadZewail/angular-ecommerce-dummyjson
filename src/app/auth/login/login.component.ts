import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as authActions from '../store/actions'
import { errorSelector } from '../store/selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  error$:Observable<string> | null;

  constructor(private store:Store<AppStateInterface>){
    if(this.store.select(errorSelector) == null){
      this.error$= null;
    }else{
      this.error$= this.store.select(errorSelector) as Observable<string>;
    }
    
  }

  attemptLogin():void {
    
    this.store.dispatch(authActions.startLogin({username:this.username,password:this.password}));

  }

}

