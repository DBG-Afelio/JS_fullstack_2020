import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //Actuellement un utilisateur par défaut est actif le temps que le login soit fait
  //private actual_user: User;
  public actual_user: Subject<User> = new Subject();
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:3000/users`);
  }

  getUserById(id:number): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/users/${id}`);
  }

  setActiveUser(user: User): void {
    //this.getUserById(id).subscribe(user => this.actual_user = user);
    this.actual_user.next(user);
  }

}
