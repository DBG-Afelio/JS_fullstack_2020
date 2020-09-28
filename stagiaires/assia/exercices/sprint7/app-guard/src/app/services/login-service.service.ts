import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

    public userLogin: BehaviorSubject<string> = new BehaviorSubject(this._findUserLogin()) ;
    
    constructor(
        
    ) { }

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

    private _findUserLogin(): string {
        return sessionStorage.getItem('login');
    }

}
