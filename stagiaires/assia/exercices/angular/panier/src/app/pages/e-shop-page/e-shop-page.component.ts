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
  public articlesCom: ArticleCommande[]=[];
  public viewEshop = View.ESHOP;
  public articleSelected: Article = null;
  public commandMatch: ArticleCommande = new ArticleCommande(this.articleSelected, 0);

  constructor(
    private panierService: PanierService,
    private stockService: StockService,
    private router: Router
  ) {  this.panierService.getListCommande().subscribe((listeRecue) => {
    this.panier?.setList(listeRecue);
    console.log("Mon panier :", this.panier.getList());
  })
  this.stockService.getArticlesStock().subscribe((stockRecue) => {
    this.stock?.setList(stockRecue);
    console.log("Mon stock :", this.stock.getList());
  })

  this.articleSelected = this.stock.getList()[0];
    console.log("Mon 1er acrticle a afficher :", this.articleSelected);
  }

  ngOnInit(): void {
    this.findArticleDansPanier() ? this.commandMatch = this.findArticleDansPanier() : this.commandMatch;
  }
  updateSelection(art: Article): void {
    this.articleSelected = art;
    const reponse = this.findArticleDansPanier(); console.log('reponse : ',reponse);
    if (reponse !== undefined) {
      this.commandMatch = this.findArticleDansPanier()
      console.log(this.commandMatch);
    } else {
      this.commandMatch.article = this.articleSelected;
      this.commandMatch.quantite = 0;
    }
    console.log("updateSelect :", this.articleSelected?.titre);
    console.log("updateMatchPanier :", this.commandMatch?.article?.titre, this.commandMatch?.quantite);
  }

  findArticleDansPanier(): ArticleCommande | undefined {
    const found = this.panier.getList().find(artCom => artCom?.article?.id === this.articleSelected?.id);
    return found;
  }

  updatePanier(qt: number): void{
    this.commandMatch.quantite = qt;
    this.panierService.addArticle(this.commandMatch).subscribe(() => this.router.navigate(['/']));
    console.log('qtty : ', qt, ' saved in Panier for article : ', this.articleSelected.titre);
}
  updateArticle(articleCom: ArticleCommande): void {

  }
  removeArticle(articleCom: ArticleCommande): void {

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
