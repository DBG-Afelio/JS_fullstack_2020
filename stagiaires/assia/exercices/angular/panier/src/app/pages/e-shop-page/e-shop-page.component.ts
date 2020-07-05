import { Component, OnInit, NgModule } from '@angular/core';
import { PanierService } from 'src/app/services/panier.service';
import { Article } from 'src/app/model/Article';
import { StockService } from 'src/app/services/stock.service';
import { ArticleCommande } from 'src/app/model/Article-commande';
import { View } from 'src/app/model/view.enum';
import { Panier } from 'src/app/model/panier';
import { Stock } from 'src/app/model/stock';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-e-shop-page',
  templateUrl: './e-shop-page.component.html',
  styleUrls: ['./e-shop-page.component.css']
})
export class EShopPageComponent implements OnInit {

  public panier: Panier = new Panier();
  public stock: Stock = new Stock([]);
  public articlesCom: ArticleCommande[] = [];
  public viewEshop = View.ESHOP;
  public articleSelected: Article = null;
  public commandMatch: ArticleCommande = new ArticleCommande(this.articleSelected, 0);
  public prix: number = 0;
  public qtte: number = 0;

  constructor(
    private panierService: PanierService,
    private stockService: StockService,
  ) {
    this.stockService.getArticlesStock().subscribe((stockRecue) => {
      this.stock.setList(stockRecue);
      this.articleSelected = this.stock.getList()[0];
    });
    this.panierService.getListCommande().subscribe((listeRecue) => {
      this.panier.setList(listeRecue);
      this.updateCommandMatch();
      //add update totaux
    });
    
  }

  ngOnInit(): void {
    this.articleSelected = this.stock.getList()[0];
    console.log("Mon 1er acrticle a afficher :", this.articleSelected);
    
  }
  updateSelection(art: Article): void {
    this.articleSelected = art;
    this.updateCommandMatch();
  }

  updateCommandMatch(): void {
    const found = this.panier.getList().find(artCom => artCom.article.id === this.articleSelected.id);
    if (found !== undefined) {
      this.commandMatch = found;
    } else {
      this.commandMatch.article = this.articleSelected;
      this.commandMatch.quantite = 0;
    }
    
  }

  updatePanier(qt: number): void {
    this.panierService.updatePanier(this.commandMatch, qt).subscribe();
    this.panierService.getPrixTotal().subscribe((prixRecu) => this.prix = prixRecu);
    this.panierService.getQtteTotale().subscribe((qtRecu) => this.qtte = qtRecu);
  }

}

