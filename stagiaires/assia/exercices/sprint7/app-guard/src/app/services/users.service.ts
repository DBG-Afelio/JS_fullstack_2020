import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CreateCredentialsDto } from '../models/Credentials/CreateCredentialsDto';
import { Credentials } from '../models/Credentials/Credentials.model';
import { User } from '../models/User/User.model';
import { map, catchError } from 'rxjs/operators'
import { GetUserDto } from '../models/User/GetUserDto';
import { SetUserDto } from '../models/User/SetUserDto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public url = `${environment.baseApiUrl}/users`;
    // public url = `https://api.assia-rachdi.ga/users`;

    constructor(
        private _http: HttpClient,
    ) { }

    public getAll(): Observable<User[]> {
        return this._http.get<GetUserDto[]>(this.url)
        .pipe(
            map((userList: GetUserDto[]) => userList.map(
                (userDto: GetUserDto) => User.fromDto(userDto))
            )
        );
    }

    public getById(userId: number): Observable<User> {
        return this._http.get<GetUserDto>(`${this.url}/${userId}`)
        .pipe(
            map(
                (userDto: GetUserDto) => User.fromDto(userDto))
        );
    }

  public update(userToUp: User): Observable<User> {
      console.log('update using--------------')
        return this._http.patch<SetUserDto>(`${this.url}/${userToUp.id}`, userToUp.toDto())
        .pipe(
            map((userDtoUpdated: GetUserDto) => User.fromDto(userDtoUpdated))
        );
    }

    public delete(userToDel: User): Observable<any> {
        return this._http.delete(`${this.url}/${userToDel.id}`)
        .pipe(
            catchError((error: any) => throwError(error))
        );
    }
}
