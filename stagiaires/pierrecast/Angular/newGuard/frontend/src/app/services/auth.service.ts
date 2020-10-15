import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { encode } from 'js-base64'
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { User } from '../models/userModels/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private postMessageListener = (message) => {
    this.storeToken(message.data);
    this.currentUserSubject.next(this.getDecodedAccessToken(message.data));
  }
  
  public currentUserSubject: BehaviorSubject<any> = new BehaviorSubject(
    this.getDecodedAccessToken(localStorage.getItem('token'))
  );

  constructor(private http: HttpClient) {
    window.removeEventListener('message', this.postMessageListener);
    let listener = window.addEventListener('message', this.postMessageListener);
  }
  
  public getCurrentUser(): Observable<any>  {
    return this.currentUserSubject.asObservable();
  }

  public isAuthenticated(): string {
    return localStorage.getItem('token'); 
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }

  public storeToken(token: string): void {
    localStorage.setItem('token', token);
    
  }

  public login(username: string, password: string): any { 
    return this.http.get('http://localhost:3000/auth/login', {
      headers: {Authorization: 'Basic ' + encode(username +":"+ password) }})
      .pipe(
        tap((bearerToken: any) => {
          this.storeToken(bearerToken.access_token);
          this.currentUserSubject.next(this.getDecodedAccessToken(bearerToken.access_token));
        })
      )
    ; 
  }

  public loginByGoogle() : Observable<User>{
    let googlewindow = window.open('http://localhost:3000/google', 
    'myWindow',
    'location=1, status=1, scrollbar=1, width=800, height=800');

    return this.getCurrentUser();
  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  ngOnDestroy() {
    this.currentUserSubject.unsubscribe();
  }

  /*
  public loginGoogle(): any { 
    alert('google');
    return this.http.get('http://localhost:3000/google')
      .pipe(
        tap((bearerToken: any) => {
          this.storeToken(bearerToken.access_token);
          this.currentUserSubject.next(this.getDecodedAccessToken(bearerToken.access_token));
        })
      )
    ; 
  }*/
}
