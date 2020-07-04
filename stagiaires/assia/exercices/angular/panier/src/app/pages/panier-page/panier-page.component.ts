import { Component, OnInit } from '@angular/core';
import { ArticleCommande } from 'src/app/model/Article-commande';
import { Panier } from 'src/app/model/Panier';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-panier-page',
  templateUrl: './panier-page.component.html',
  styleUrls: ['./panier-page.component.css']
})
export class PanierPageComponent implements OnInit {

  panier: Panier;
  constructor(private panierService: PanierService) { 
    this.panierService.getListCommande().subscribe((listeRecue) => {
      this.panier.setList(listeRecue);
    });
   }

  ngOnInit(): void {
  }

}
