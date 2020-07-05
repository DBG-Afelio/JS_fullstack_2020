import { Component, OnInit, NgModule } from '@angular/core';
import { PanierService } from 'src/app/services/panier.service';
import { Article } from 'src/app/model/Article';
import { StockService } from 'src/app/services/stock.service';
import { ArticleCommande } from 'src/app/model/Article-commande';
import { View } from 'src/app/model/view.enum';
import { Panier } from 'src/app/model/panier';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-e-shop-page',
  templateUrl: './e-shop-page.component.html',
  styleUrls: ['./e-shop-page.component.css']
})
export class EShopPageComponent implements OnInit {

  public panier: Panier = new Panier();
  public stock: Stock = new Stock([]);
  public viewEshop = View.ESHOP;
  public articleSelected: Article = null;
 private commandMatch = new ArticleCommande(null, 0, 0); 
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
      this.panierService.getPrixTotal().subscribe((prixRecu) => this.prix = prixRecu);
      this.panierService.getQtteTotale().subscribe((qtRecu) => this.qtte = qtRecu);

      this.updateCommandMatch(this.articleSelected); 
      console.log('------------constructor----------------');
      
    });
    
  }

  ngOnInit(): void {

  }
  getCommandMatch(): ArticleCommande {
    return this.commandMatch;
  }
  
  setCommandMatch(art: Article, qt:number, id: number) : void{
    this.commandMatch.article = art;
    this.commandMatch.quantite = qt;
    this.commandMatch.id = id;
  }

  updateSelection(art: Article): void {
    this.articleSelected = art;
    console.log('commandMatch avant modif : ', this.getCommandMatch());
    this.updateCommandMatch(art);
    console.log("mon match select :", this.getCommandMatch());
  }

  updateCommandMatch(artEnCours: Article): void {
    const found = this.findCommand(artEnCours);
    if (found) {
      console.log('FOUND', found);
      this.setCommandMatch(found.article, found.quantite, found.id);
    } else {
      console.log('NOT FOUND: ', found);
      this.setCommandMatch(artEnCours, 0, 0);
    }
  }
  findCommand(art: Article): ArticleCommande | undefined {
    return this.panier.getList().find(artCom => artCom?.article?.id === art.id);
}
  updatePanier(qt: number): void {
    this.panierService.updatePanier(this.getCommandMatch(), qt).subscribe((articleRecu) => {
      this.setCommandMatch(articleRecu.article, articleRecu.quantite, articleRecu.id);
      this.panierService.getListCommande().subscribe((listeUpdated) => {
        this.panier.setList(listeUpdated);
        this.panierService.getPrixTotal().subscribe((prixRecu) => this.prix = prixRecu);
        this.panierService.getQtteTotale().subscribe((qtRecu) => this.qtte = qtRecu);
        
      });
    });
  }

}

