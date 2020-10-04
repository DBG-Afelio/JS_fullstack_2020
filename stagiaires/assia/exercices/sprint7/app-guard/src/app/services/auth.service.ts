import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { CreateCredentialsDto } from '../models/Credentials/CreateCredentialsDto';
import { Credentials } from '../models/Credentials/Credentials.model';
import { User } from '../models/User/User.model';
import { map, catchError, tap } from 'rxjs/operators';
import { GetUserDto } from '../models/User/GetUserDto';
import { UsersService } from './users.service';
import * as jwt_decode from 'jwt-decode';
import * as JwtDecode from 'jwt-decode';
import { Payload } from '../components/interface/payload';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public url = `http://localhost:3000/auth`;
  public subscriptionUrl = `${this.url}/sign-up`;
  public connexionUrl = `${this.url}/sign-in`;

  public currentUser: BehaviorSubject<User> = new BehaviorSubject(null);

  public currentUsertoken: BehaviorSubject<string> = new BehaviorSubject(
    this._findSessionUser()
  );

  constructor(private _http: HttpClient, private userService: UsersService) {}

  public registerNewUser(credentials: Credentials): Observable<User> {
    return this._http
      .post<CreateCredentialsDto>(this.subscriptionUrl, credentials.toDto())
      .pipe(map((createdUser: GetUserDto) => User.fromDto(createdUser)));
  }

  public connectUser(credentials: Credentials): Observable<any> {
    return this._http
      .get<CreateCredentialsDto>(this.connexionUrl, {
        headers: {
          authorization: `Basic ${window.btoa(
            `${credentials.login}:${credentials.password}`
          )}`,
        },
      })
      .pipe(
        tap((customBody) => this._saveSessionUser(customBody.body.access_token))
      );
  }

  /***************************************************** session storage */
  private _saveSessionUser(rawJwtToken: string): void {
    this.currentUsertoken.next(rawJwtToken);
    sessionStorage.setItem('userToken', rawJwtToken);
    this.setUserFromJwt(rawJwtToken);
  }

  public removeSessionUser(): void {
    this.currentUsertoken.next(null);
    this.currentUser.next(null);
    sessionStorage.clear();
    console.log('session cleared', this.currentUser.getValue());
  }

  private _findSessionUser(): string {
    const foundToken: string = sessionStorage.getItem('userToken');
    foundToken ? this.setUserFromJwt(foundToken) : null;
    return foundToken;
  }

  public setUserFromJwt(jwtToken: string): void {
    const decodePayload: Payload = JSON.parse(atob(jwtToken.split('.')[1]));
    this.userService.getById(decodePayload.id).subscribe((foundUser: User) => {
      this.currentUser.next(foundUser);
      console.log('session started', this.currentUser.getValue());
    });
  }
}
