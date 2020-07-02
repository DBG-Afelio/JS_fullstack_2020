import { Injectable } from '@angular/core';
import { Panier } from '../model/Panier';
import { ArticleCommande } from '../model/Article-commande';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private panier: Panier;

  constructor() { 
    this.panier = new Panier();
  }

  getPanier(): Panier{
    return this.panier;
  }
  // getListeCommandes(): ArticleCommande[]{
  //   return this.panier.getList();
  // }

}
