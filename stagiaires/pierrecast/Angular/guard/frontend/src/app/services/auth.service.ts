import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { encode } from 'js-base64'
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  public isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public isAuthenticated(): string {
    return localStorage.getItem('token'); 
  }

  public isLogged(): Observable<boolean>  {
    return this.isLoggedSubject.asObservable();
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.isLoggedSubject.next(false);
  }

  public storeToken(token: string): void {
    localStorage.setItem('token', token);
    this.isLoggedSubject.next(true);
  }

  public login(username: string, password: string): any { 
    return this.http.get('http://localhost:3000/auth/login', {
      headers: {Authorization: 'Basic ' + encode(username +":"+ password) }})
      .pipe(
        tap((bearerToken: any) => this.storeToken(bearerToken.access_token)
        )
      )
    ; 
  }
}
