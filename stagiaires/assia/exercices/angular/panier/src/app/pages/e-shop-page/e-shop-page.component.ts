import { Component, OnInit, Output } from '@angular/core';
import { PanierService } from 'src/app/services/panier.service';
import { Article } from 'src/app/model/Article';
import { MagasinService } from 'src/app/services/magasin.service';
import { ArticleCommande } from 'src/app/model/Article-commande';
import { Panier } from 'src/app/model/Panier';
import { Shop } from 'src/app/model/Shop';

@Component({
  selector: 'app-e-shop-page',
  templateUrl: './e-shop-page.component.html',
  styleUrls: ['./e-shop-page.component.css']
})
export class EShopPageComponent implements OnInit {
  public panier: Panier;
  public articlesEnStock: Shop;
  public articleSelected: Article;

  constructor(
    private panierService: PanierService,
    private stockService: MagasinService) {}

  ngOnInit(): void {
    this.panierService.getListCommande().subscribe((listeRecue) => {
      this.panier.setList(listeRecue);
    })
    this.stockService.getArticlesStock().subscribe((stockRecue) => {
      this.articlesEnStock.setList(stockRecue);
    })
  }
  updateSelection(art: Article): void {
    this.articleSelected = art;
  }
  updateArticleQtte(qt: number): void {
   // this.panier.updatePanier(this.articleSelected, qt);
  //  this.panierService.getPanier().updatePanier(this.articleSelected, qt);
  }



}
