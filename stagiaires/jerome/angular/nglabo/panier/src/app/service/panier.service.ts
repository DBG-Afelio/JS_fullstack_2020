import { Basket } from './../model/basket';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  panier: Basket;

  constructor() {
    this.panier = new Basket();
  }

  getBasket() {
    return this.panier;
  }

}