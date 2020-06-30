import { Component, OnInit } from '@angular/core';
import { ArticleCommande } from 'src/app/model/Article-commande';
import { Panier } from 'src/app/model/Panier';
import { PanierServiceService } from 'src/app/services/panier-service.service';

@Component({
  selector: 'app-panier-page',
  templateUrl: './panier-page.component.html',
  styleUrls: ['./panier-page.component.css']
})
export class PanierPageComponent implements OnInit {

  panier: Panier;
  constructor(private panierService: PanierServiceService) { 
    this.panier = panierService.getPanier();
   }

  ngOnInit(): void {
  }
  updateArticleQtte(qt:number, artCom:ArticleCommande): void{
    this.panierService.getPanier().updatePanier(artCom.getArticle(), qt);
  }
}
