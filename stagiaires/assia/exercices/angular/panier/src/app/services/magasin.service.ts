import { Injectable } from '@angular/core';
import { Shop } from '../model/Shop';
import { SOURCE } from '../model/source';
import { Article } from '../model/Article';

@Injectable({
  providedIn: 'root'
})
export class MagasinService {
  private magasin: Shop;
  constructor() { 
    this.magasin = new Shop(SOURCE);
  }

  getArticlesStock(): Article[] {
    return this.magasin.getList();
  }
  
}
