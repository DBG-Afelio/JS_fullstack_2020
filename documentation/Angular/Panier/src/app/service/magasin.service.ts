import { tab_img } from './../model/sourceJSON';
import { Shop } from '../model/Shop';
import { Injectable } from '@angular/core';
import { Article } from '../model/Article';

@Injectable({
  providedIn: 'root'
})
export class MagasinService {
  private magasin: Shop;

  constructor() {
    this.magasin = new Shop(tab_img);
  }

  getMagasin(): Article[] {
    return this.magasin.getListArticles();
  }

}
