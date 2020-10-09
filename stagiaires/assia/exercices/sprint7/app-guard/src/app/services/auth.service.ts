import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { CreateCredentialsDto } from '../models/Credentials/CreateCredentialsDto';
import { Credentials } from '../models/Credentials/Credentials.model';
import { User } from '../models/User/User.model';
import { map, catchError, tap, take, switchMap } from 'rxjs/operators';
import { GetUserDto } from '../models/User/GetUserDto';
import { UsersService } from './users.service';
import * as jwt_decode from 'jwt-decode';
import * as JwtDecode from 'jwt-decode';
import { CustomHttpResponseBody } from '../interface/customHttpResponseBody';
import { Payload } from '../interface/payload';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public url = `https:api.assia-rachdi.ga/auth`;
  public subscriptionUrl = `${this.url}/sign-up`;
  public connexionUrl = `${this.url}/sign-in`;

  public currentUser: BehaviorSubject<User> = new BehaviorSubject(null); // <<

  constructor(private _http: HttpClient, private userService: UsersService) {
    // this._findSessionUser();
  }

  public registerNewUser(credentials: Credentials): Observable<User> {
    return this._http
      .post<GetUserDto>(this.subscriptionUrl, credentials.toDto())
      .pipe(map((createdUser: GetUserDto) => User.fromDto(createdUser)));
  }

  public connectUser(credentials: Credentials): Observable<User> {
    return this._http
      .get<CustomHttpResponseBody>(this.connexionUrl, {
        headers: {
          authorization: `Basic ${window.btoa(
            `${credentials.login}:${credentials.password}`
          )}`,
        },
      })
      .pipe(
        switchMap((customBody: CustomHttpResponseBody) => {
          this._saveSessionUser(customBody.body.access_token);
          return this.getUserFromJwt(customBody.body.access_token).pipe(
            tap((u) => (u ? this.currentUser.next(u) : null))
          );
        })
      );
  }

  /***************************************************** session storage */
  private _saveSessionUser(rawJwtToken: string): void {
    sessionStorage.setItem('userToken', rawJwtToken);
    console.log('rawJWT : ', rawJwtToken);
  }

  public removeSessionUser(): void {
    this.currentUser.next(null);
    sessionStorage.clear();
  }

  // private _findSessionUser() {
  //   const foundToken: string = sessionStorage.getItem('userToken');
  //   foundToken ? this.setUserFromJwt(foundToken) : null;
  // }

  public getUserFromJwt(jwtToken: string): Observable<User> {
    let user: User = null;
    const decodePayload: Payload = JSON.parse(atob(jwtToken.split('.')[1]));
    return this.userService.getById(decodePayload.id);
  }
}
