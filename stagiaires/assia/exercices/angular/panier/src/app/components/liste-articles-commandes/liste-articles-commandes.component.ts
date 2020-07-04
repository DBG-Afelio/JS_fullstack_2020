import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleCommande } from 'src/app/model/Article-commande';

@Component({
  selector: 'app-liste-articles-commandes',
  templateUrl: './liste-articles-commandes.component.html',
  styleUrls: ['./liste-articles-commandes.component.css']
})
export class ListeArticlesCommandesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
