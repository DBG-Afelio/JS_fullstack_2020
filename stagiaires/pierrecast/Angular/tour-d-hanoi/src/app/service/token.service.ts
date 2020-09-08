import { Injectable } from '@angular/core';
import { Token } from '../model/Token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private token: Token;
  
  constructor(size: number) {
    this.token = new Token(size);
  }
}
