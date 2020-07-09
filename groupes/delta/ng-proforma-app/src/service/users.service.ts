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
  public user_co: User;


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
      this.user_co = user;
    })
  }

   updateUser(user: User): Observable<User> {
     return this.http.put<UserDto>(`http://localhost:3000/utilisateurs`,user.id).pipe(
       map((userDto:UserDto)=>{
         return User.fromDto(userDto);
       })
     )
   }

   creatUser(user: User): Observable<User> {
     return this.http.post<UserDto>(`http://localhost:3000/utilisateurs`,user).pipe(
       map((userDto )=>{
         return User.fromDto(userDto)
       })
     )
   }

   deleteUser(user: User): Observable<{}> {
     return this.http.delete<{}>(`http://localhost:3000/utilisateurs/${user.id}`);
  }

   getUserById(id: number): Observable<User> {
     return this.http.get<UserDto>(`http://localhost:3000/utilisateurs/${id}`).pipe(
       map((userDto :UserDto )=>{
        return User.fromDto(userDto);
       }
        

     ))
   }

}
