import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { CreateCredentialsDto } from '../models/Credentials/CreateCredentialsDto';
import { Credentials } from '../models/Credentials/Credentials.model';
import { User } from '../models/User/User.model';
import { map, catchError, tap } from 'rxjs/operators'
import { GetUserDto } from '../models/User/GetUserDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    public url = `http://localhost:3000/auth`;
    public subscriptionUrl = `${this.url}/sign-up`;
    public connexionUrl = `${this.url}/sign-in`;

    public currentUsertoken: BehaviorSubject<string> = new BehaviorSubject(this._findSessionUser()) ;
    
    constructor(
        private _http: HttpClient,
    ) { }

    public registerNewUser(credentials: Credentials): Observable<User> {
        return this._http.post<CreateCredentialsDto>(this.subscriptionUrl, credentials.toDto())
            .pipe(
                map((createdUser: GetUserDto) => User.fromDto(createdUser))
            );
    }
    
    public connectUser(credentials: Credentials): Observable<any> {
        return this._http.get<CreateCredentialsDto>(this.connexionUrl, {
            headers: { authorization : `Basic ${window.btoa(`${credentials.login}:${credentials.password}`)}` } 
        }).pipe(
            tap((customBody) => {
                this._saveSessionUser(customBody.body.access_token)})
        );
    }



    /***************************************************** session storage */
    private _saveSessionUser(token: string): void {
        this.currentUsertoken.next(token);
        sessionStorage.setItem('current_user',token);
        console.log('user saved in session stotage ', token);
    }

    public removeSessionUser(): void {
        this.currentUsertoken.next(null);
        sessionStorage.clear();
        console.log('session cleared');
    }

    private _findSessionUser(): string {
        return sessionStorage.getItem('current_user');
    }

}





