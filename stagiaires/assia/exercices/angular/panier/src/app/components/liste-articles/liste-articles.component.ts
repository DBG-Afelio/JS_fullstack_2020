import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { Article } from '../../model/Article';
import { ArticleCommande } from 'src/app/model/Article-commande';
import { View } from 'src/app/model/view.enum';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']
})
export class ListeArticlesComponent implements OnInit {
  @Input() listeArticles: Article[] | ArticleCommande[];
  @Input() currentView: View;
  @Output() selectedArticleEvent: EventEmitter<Article> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(article: Article): void {
    this.selectedArticleEvent.emit(article);
  }

}
