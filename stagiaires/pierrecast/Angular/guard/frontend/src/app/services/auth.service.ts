import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { encode } from 'js-base64'
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  public isAuthenticated() {
    return localStorage.getItem('token'); 
  }

  public logout() {
    localStorage.removeItem('token');
  }

  public storeToken(token: string) {
    localStorage.setItem('token', token)
  }

  public login(username: string, password: string) { 
    return this.http.get('http://localhost:3000/auth/login', {
      headers: {Authorization: 'Basic ' + encode(username +":"+ password) }}).pipe(
        tap(this.storeToken)
      ); 
  }
 
}
