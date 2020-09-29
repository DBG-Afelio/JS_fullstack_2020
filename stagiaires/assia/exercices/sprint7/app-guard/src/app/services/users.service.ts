import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CreateCredentialsDto } from '../models/Credentials/CreateCredentialsDto';
import { Credentials } from '../models/Credentials/Credentials.model';
import { User } from '../models/User/User.model';
import { map, catchError } from 'rxjs/operators'
import { UserDto } from '../models/User/UserDto';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    public url = `http://localhost:3000/users`;

    constructor(
        private _http: HttpClient,
    ) { }

    public getAll(): Observable<User[]> {
        return this._http.get<UserDto[]>(this.url)
        .pipe(
            map((userList: UserDto[]) => userList.map(
                (userDto: UserDto) => User.fromDto(userDto))
            )
        );
    }

    public getById(userId: number): Observable<User> {
        return this._http.get<UserDto>(`${this.url}/${userId}`)
        .pipe(
            map(
                (userDto: UserDto) => User.fromDto(userDto))
        );
    }

    public update(userToUp: User): Observable<User> {
        return this._http.patch<UserDto>(`${this.url}/${userToUp.id}`, userToUp.toDto())
        .pipe(
            map((userDtoUpdated: UserDto) => User.fromDto(userDtoUpdated)),
            catchError((error: any) => throwError(error))
        );
    }

    public delete(userToDel: User): Observable<any> {
        return this._http.delete<UserDto>(`${this.url}/${userToDel.id}`)
        .pipe(
            catchError((error: any) => throwError(error))
        );
    }
}
