import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class UserService {

  private users: User[];

  constructor() {
    this.users = [];
  }

  public addUser (user: User, password: string): Observable<User> {
    return new Observable<User>((observer) => {
      user.userId = 17;
      setTimeout(() => observer.next(user), 1000);
    })
  }


}
