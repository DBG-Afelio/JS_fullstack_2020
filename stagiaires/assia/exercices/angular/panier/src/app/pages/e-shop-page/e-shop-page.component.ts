import { Component, OnInit, Output } from '@angular/core';
import { PanierServiceService } from 'src/app/services/panier-service.service';
import { Panier } from 'src/app/model/Panier';
import { Article } from 'src/app/model/Article';
import { MagasinServiceService } from 'src/app/services/magasin-service.service';

@Component({
  selector: 'app-e-shop-page',
  templateUrl: './e-shop-page.component.html',
  styleUrls: ['./e-shop-page.component.css']
})
export class EShopPageComponent implements OnInit {
  articlesEnStock: Article[];
  panier: Panier;
  articleSelected: Article;
  constructor(public panierService: PanierServiceService, public stockService: MagasinServiceService) { 
    this.panier = panierService.getPanier();
    this.articlesEnStock = stockService.getArticlesStock();
    this.articleSelected = this.articlesEnStock[0]; //on a choisi d'afficher le 1er item au chargement de la page
  }

  ngOnInit(): void {
  }
  updateSelection(art: Article): void {
    this.articleSelected = art;
  }
  updateArticleQtte(qt: number): void {
   // this.panier.updatePanier(this.articleSelected, qt);
    this panierService.getPanier().updatePanier(this.articleSelected, qt);
  }

}
