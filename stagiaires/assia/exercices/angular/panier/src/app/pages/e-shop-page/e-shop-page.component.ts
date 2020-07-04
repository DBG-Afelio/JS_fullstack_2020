import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/services/panier.service';
import { Article } from 'src/app/model/Article';
import { StockService } from 'src/app/services/stock.service';
import { ArticleCommande } from 'src/app/model/Article-commande';
import { View } from 'src/app/model/view.enum';

@Component({
  selector: 'app-e-shop-page',
  templateUrl: './e-shop-page.component.html',
  styleUrls: ['./e-shop-page.component.css']
})
export class EShopPageComponent implements OnInit {
  public articlesStock: Article[];
  public articlesCom: ArticleCommande[];
  public viewEshop = View.ESHOP ;
  public articleSelected: Article;

  constructor(
    private panierService: PanierService,
    private stockService: StockService
  ) { }

  ngOnInit(): void {
    // this.panierService.getListCommande().subscribe((listeRecue) => {
    //   this.articlesCom = listeRecue;
    //   console.log('panier recu : ', this.articlesCom);
    // })
    this.stockService.getArticlesStock().subscribe((stockRecue) => {
      this.articlesStock = stockRecue;
      console.log('stock recu : ', this.articlesStock);
    })
    this.articleSelected = this.articlesStock[0];
    console.log('selection : ', this.articleSelected);
  }
  updateSelection(art: Article): void {
    this.articleSelected = art;
  }
  updateArticle(articleCom: ArticleCommande): void {

  }
  removeArticle(articleCom: ArticleCommande): void {

  }
  addArticle(articleCom: ArticleCommande): void {

  }

  // getTotalPrix(): number{
  //   let prixRecu: number;
  //   this.panierService.getPrixTotal().subscribe(prix => prixRecu = prix);
  //   return prixRecu;
  // }
  // getTotaleQtte(): number{
  //   let qtteRecu: number;
  //   this.panierService.getQtteTotale().subscribe(qt => qtteRecu = qt);
  //   return qtteRecu;
  // }


}
