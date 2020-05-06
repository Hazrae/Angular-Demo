import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = 
  [
    // {
    //   firstName: 'rintintin',
    //   lastName: 'ratata',
    //   email: 'rintintin@ratata',      
    // }
  ]

  userSubject = new Subject<User[]>();

  constructor() { }

  addUser(user: User){
    this.users.push(user);
    this.emitUser();
  }

  emitUser(){
    this.userSubject.next(this.users.slice());
  }
}
