import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  public isAuthenticated() {
    return localStorage.getItem('username');
  }

  public clearItem() {
    localStorage.clear();
  }

  public setItem(username: string): void {
    localStorage.setItem('username', username);
  }
}
