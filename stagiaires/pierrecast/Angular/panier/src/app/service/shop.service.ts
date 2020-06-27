import { tab_img } from './../model/sourceJSON';
import { Injectable } from '@angular/core';
import { Shop } from '../model/Shop';
import { Article } from '../model/Article';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private shop: Shop;
  
  constructor() { 
    this.shop = new Shop(tab_img);
  }

  public getListArticles():Article[] {
    return this.shop.getListArticles();
  }

  public getArticleById(id: number): Article {
    return this.shop.getArticleById(id);
  }
}
