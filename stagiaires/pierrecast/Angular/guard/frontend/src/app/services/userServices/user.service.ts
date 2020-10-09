import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { User } from 'src/app/models/userModels/User';
import { UserDto } from 'src/app/models/userModels/UserDto';
import { HttpClient } from '@angular/common/http';
import { SetUserDto } from 'src/app/models/userModels/SetUserDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {

  }

  public getFreeUsers(): Observable<User[]> {
    return this.http.get<UserDto[]>(this.url + '/free')
      .pipe(
        map((arrayUserDto : UserDto[]) => {
          return arrayUserDto.map(userDto => User.fromDto(userDto));
        }),
      )
    ;
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

  public createUser(user: User): Observable<User> {
    return this.http
      .post<UserDto>(this.url + "/register", {...user.toDto()})
      .pipe(
        map((userDto:UserDto) => User.fromDto(userDto)),
        catchError((error: any) => throwError(error))
      );
  }

  public updateUser(payload: User): Observable<User> {
    return this.http
      .patch<UserDto>(`${this.url}/${payload.id}`, payload.toDto())
      .pipe
      (
        map((userDto:UserDto) => User.fromDto(userDto)),
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

  public findUsers(
     filter = '', sortOrder = 'asc',
    pageNumber = 0, pageSize = 10
  ):  Observable<User[]> {

    return this.http.get(this.url).pipe(
        map(res =>  res["payload"])
    );
  }
}
