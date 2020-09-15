//import { User } from 'src/app/models/userModels/User';
import { Subject, of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/userModels/User';
import { UserDto } from 'src/app/models/userModels/UserDto';
import { HttpClient } from '@angular/common/http';
import { Sex } from 'src/app/models/userModels/sex.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {

  }

  public getList(): Observable<User[]> {
    return this.http.get<UserDto[]>(this.url)
      .pipe(
        map((arrayUserDto : UserDto[]) => {
          return arrayUserDto.map(userDto => User.fromDto(userDto));
        }),
      )
    ;
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<UserDto>(this.url + '/' +id)
      .pipe(
        map(userDto => User.fromDto(userDto)),
      )
    ;
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