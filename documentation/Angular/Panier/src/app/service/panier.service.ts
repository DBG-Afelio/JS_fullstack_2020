import { Basket } from './../model/Basket';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private panier: Basket;

  constructor() {
    this.panier = new Basket();
  }

  getBasket() {
    return this.panier;
  }

}
