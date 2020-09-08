//import { User } from 'src/app/models/userModels/User';
import { Subject, of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor() {

  }

  public getNationalities(): Observable<string[]> {
    const nationalities = [
      'Belgique', 'France', 'Suisse'
    ];
    return of(nationalities);
  }



  /*private users: User[];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }*/
}