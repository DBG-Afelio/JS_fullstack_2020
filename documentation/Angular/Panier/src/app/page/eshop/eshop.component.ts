import { Basket } from './../../model/Basket';
import { PanierService } from './../../service/panier.service';
import { Component, OnInit } from '@angular/core';
import { MagasinService } from '../../service/magasin.service';
import { Article } from '../../model/Article';

@Component({
  selector: 'app-eshop',
  templateUrl: './eshop.component.html',
  styleUrls: ['./eshop.component.css']
})
export class EshopComponent implements OnInit {

  public listeArticle: Article[] = [];
  public panier: Basket;
  public currentArticle: Article;

  constructor(
    private magasinService: MagasinService,
    private panierService: PanierService,
    ) {
    this.listeArticle = this.magasinService.getMagasin();
    this.panier = this.panierService.getBasket();
    this.currentArticle = this.listeArticle[0];
  }

  ngOnInit() {

  }

  changeCurrent(article: Article) {
    this.currentArticle = article;
  }

  changeQuantity(qt: number) {
    this.panier.updateBasket(this.currentArticle, qt, this.currentArticle.getPrice());
  }
}
