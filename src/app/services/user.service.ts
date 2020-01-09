import { Injectable } from '@angular/core';
import { User } from '../models/User.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = []; 
  userSubject = new Subject<User[]>();

  emitUsers() { 
    const usersBack = this.users ?  this.users.slice() : null
    this.userSubject.next(usersBack);
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }

  constructor() { }
}
