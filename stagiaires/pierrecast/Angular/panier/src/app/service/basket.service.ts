import { Injectable } from '@angular/core';
import { Basket } from '../model/Basket';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private basket: Basket;

  constructor() {
    this.basket = new Basket();
  }

  getBasket() {
    return this.basket;
  }
}
