import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { mergeMap, map } from "rxjs/operators";
import { User } from 'src/model/user';
import { UserDto } from 'src/model/userDTO';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public user: Subject<User> = new Subject<User>();


  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<UserDto[]>('http://localhost:3000/utilisateurs').pipe(
      map((usersDto:UserDto[]) => {
        return usersDto.map((userDto:UserDto) => User.fromDto(userDto));
      })
    )
  }

  getUserByLogin(login:string): Observable<User> {
    return this.http.get<UserDto>(`http://localhost:3000/utilisateurs?login=${login}`).pipe(
      map(userDto => {
        console.log(userDto);
        return User.fromDto(userDto[0]);
      })
    )
  }

  authentification(login: string, password: string): void {
    this.getUserByLogin(login).subscribe((user: User) => {
      console.log(user);
      this.user.next(user.password === password && user ? user : undefined);
    })
  }

  // updateUser(user: User): Observable<User> {
  // }

  // addUser(user: User): Observable<User> {
  // }

  // removeUser(user: User): Observable<User> {
  // }

  // getUserById(id: number): Observable<User> {
  // }

}
