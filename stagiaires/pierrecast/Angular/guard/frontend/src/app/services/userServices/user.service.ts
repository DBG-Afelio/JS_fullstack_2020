import { Subject, of, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { User } from 'src/app/models/userModels/User';
import { UserDto } from 'src/app/models/userModels/UserDto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'http://localhost:3000/user';

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

  public createUser(username: string, password : string): Observable<User> {
    console.log('createUser', username, password)
    return this.http
      .post<UserDto>(this.url + "/register", {username, password})
      .pipe(
        map((userDto:UserDto) => User.fromDto(userDto)),
        catchError((error: any) => throwError(error))
      );
  }

  public updateUser(payload: User): Observable<User> {
    return this.http
      .patch<User>(`${this.url}/${payload.id}`, payload.toDto())
      .pipe
      (
        catchError((error: any) =>  throwError(error))
      );
  }

  public removeUser(payload: User): Observable<User> {
    return this.http
      .delete<any>(`${this.url}/${payload.id}`)
      .pipe(
        catchError((error: any) =>  throwError(error))
      );
  }
}