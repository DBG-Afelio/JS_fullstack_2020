import { Component, OnInit } from '@angular/core';
import { ArticleCommande } from 'src/app/model/Article-commande';
import { PanierService } from 'src/app/services/panier.service';
import { Panier } from 'src/app/model/panier';

@Component({
  selector: 'app-panier-page',
  templateUrl: './panier-page.component.html',
  styleUrls: ['./panier-page.component.css']
})
export class PanierPageComponent implements OnInit {

  panier: Panier = null;

  constructor( private panierService: PanierService ) { 
    this.panierService.getListCommande().subscribe((listeRecue) => {
      console.log(listeRecue);
      this.panier?.setList(listeRecue);
    });
   }

  ngOnInit(): void {
  }

  // updatePanier(article: Article, qt: number): void {
  //   const artCom = this.findArticleEtIndex(article);
  //   if ( artCom === null && qt !== 0) {
  //       this.ajouteArticle(article, qt);
  //   } else {
  //       if (qt === 0) {
  //           this.supprimerArticle(artCom.articleTrouve);
  //       } else {
  //           this.updateArticleQtty(artCom.articleTrouve, qt);
  //       }
  //   }

}
