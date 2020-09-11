//import { User } from 'src/app/models/userModels/User';
import { Subject, of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

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

  public getRoles(): Observable<string[]> {
    const roles = [
      'Développeur Frond-End', 'Développeur Back-End', 'Intégrateur', 'UX/UI Designer'
    ];
    return of(roles);
  }

  public getLogins(): Observable<string[]> {
    const logins = [
      'admin', 'pierre-cast'
    ];
    return of(logins);
  }

  public isLoginExist(login : string): Observable<boolean>{
    return this.getLogins().pipe(
      map((logins: string[]) => logins.includes(login))
    )
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