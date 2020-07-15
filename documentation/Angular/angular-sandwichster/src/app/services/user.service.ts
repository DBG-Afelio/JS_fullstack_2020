import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserDto } from 'src/app/interfaces/userDto';
import { UserModel } from 'src/app/interfaces/user.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('http://localhost:3000/utilisateurs')
    .pipe( 
      map((tabUserDto: UserDto[]) => {
        return tabUserDto.map(userDto => UserModel.fromDto(userDto))
      })
    )
  }

  getUserByID(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(`http://localhost:3000/utilisateurs/${id}`)
    .pipe( 
      map((userIdDto: UserDto) => {
        return UserModel.fromDto(userIdDto)
      })
    );
  }

  createUser(user: UserModel): Observable<UserModel> {
    return this.http
      .post<UserModel>(`http://localhost:3000/utilisateurs`, user.toDto())
      .pipe(
        catchError((error: any) => throwError(error.json())));
  }

  updateUser(user: UserModel): Observable<UserModel> {
    console.log(user);
    return this.http
      .put<UserModel>(`http://localhost:3000/utilisateurs/${user.id}`, user.toDto())
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  removeUser(user: UserModel): Observable<UserModel> {
    return this.http
      .delete<UserModel>(`http://localhost:3000/utilisateurs/${user.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

}

