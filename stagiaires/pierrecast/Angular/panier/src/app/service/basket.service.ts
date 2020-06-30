import { Injectable } from '@angular/core';
import { Basket } from '../model/Basket';
import { Article } from '../model/Article';
import { Command } from '../model/Command';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private basket: Basket;

  constructor() {
    this.basket = new Basket();
  }

  public getBasket() {
    return this.basket;
  }

  public findCommand(article: Article): Command {
    return this.basket.findCommand(article);
  }

  public getListCommands():Command[] {
    return this.basket.getListCommand();
  }
}
