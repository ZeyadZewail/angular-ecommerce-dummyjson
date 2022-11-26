import { Injectable } from '@angular/core';
import { User } from './types/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //attempts to send user info to dummyjson for verification
  async login(username:string,password:string): Promise<User>{
    let response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        username: username,
        password: password,
      })
    })

    //if the server doesnt respond with OK, it means the username or password were wrong. (this can be improved by passing error)
    if(!response.ok){
      throw new Error("Wrong Username/Password");
    }


    let body = await response.json();
    return body as User;
  }
}
