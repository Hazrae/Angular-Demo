import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean = false;

  constructor() {}

  SignIn()
  {
    return new Promise(
    (resolve,reject) => {
      setTimeout(
        ()=>{
          this.isAuth = true;
          if(this.isAuth) resolve(console.log("ça marche"));
          else reject(console.log("ça marche pas"));
        },2000);
      }
      );
  } 
  SignOut()
  {
    this.isAuth = false;
  }
}
