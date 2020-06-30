import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleCommande } from 'src/app/model/Article-commande';

@Component({
  selector: 'app-liste-articles-commandes',
  templateUrl: './liste-articles-commandes.component.html',
  styleUrls: ['./liste-articles-commandes.component.css']
})
export class ListeArticlesCommandesComponent implements OnInit {
  @Input() listeCommandes: ArticleCommande[];
  @Output() changedQtteEvent: EventEmitter<{qte: number, artCom: ArticleCommande}>;
 
  constructor() { }

  ngOnInit(): void {
  }

  relayQtteEvent(qt:number, artCom:ArticleCommande):void {
    this.changedQtteEvent.emit({qte: qt, artCom: artCom});
  }
}
