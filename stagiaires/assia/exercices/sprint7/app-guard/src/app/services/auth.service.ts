import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Credentials } from '../models/credentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    public credentials: BehaviorSubject<Credentials> = new BehaviorSubject(this._findSessionUser()) ;
    
    constructor() { }

    public saveUserLogin(login: string): void {
        this.userLogin.next(login);
        sessionStorage.setItem('login',login);
        console.log('login registered ', login);
    }

    public removeUserLogin(): void {
        this.userLogin.next(null);
        sessionStorage.clear();
        console.log('session cleared');
    }

    private _findSessionUser(): string {
        
        return sessionStorage.getItem('login');
    }

}
