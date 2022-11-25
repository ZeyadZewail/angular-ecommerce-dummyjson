import { Injectable } from '@angular/core';
import { User } from './types/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  async login(username:string,password:string): Promise<User>{
    let response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        username: username,
        password: password,
      })
    })

    if(!response.ok){
      throw new Error("Failed to login");
    }


    let body = await response.json();
    return body as User;
  }
}
