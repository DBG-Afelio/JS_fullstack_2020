import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { CreateCredentialsDto } from '../models/Credentials/CreateCredentialsDto';
import { Credentials } from '../models/Credentials/Credentials.model';
import { User } from '../models/User/User.model';
import { map, catchError, tap } from 'rxjs/operators'
import { UserDto } from '../models/User/UserDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    public url = `http://localhost:3000/auth`;
    public subscriptionUrl = `${this.url}/sign-up`;
    public connexionUrl = `${this.url}/sign-in`;

    public userLogin: BehaviorSubject<string> = new BehaviorSubject(this._findSessionUser()) ;
    
    constructor(
        private _http: HttpClient,
    ) { }

    public registerNewUser(credentials: Credentials): Observable<User> {
        return this._http.post<CreateCredentialsDto>(this.subscriptionUrl, credentials.toDto())
            .pipe(
                map((createdUser: UserDto) => User.fromDto(createdUser)),
                tap((newUser: User) => this._saveSessionUser(newUser.login))
            );
    }
    
    public connectUser(credentials: Credentials): Observable<User> {
        return this._http.get<UserDto>(this.connexionUrl, {
            headers: { authorization : "Basic naW50ZXN0OnB3ZHRlc3Q=" }
        }).pipe(
            map((userDto: UserDto) => User.fromDto(userDto))
        )
    }


    /***************************************************** session storage */
    private _saveSessionUser(login: string): void {
        this.userLogin.next(login);
        sessionStorage.setItem('login',login);
        console.log('user saved in session stotage ', login);
    }

    public removeSessionUser(): void {
        this.userLogin.next(null);
        sessionStorage.clear();
        console.log('session cleared');
    }

    private _findSessionUser(): string {
        return sessionStorage.getItem('login');
    }

}





