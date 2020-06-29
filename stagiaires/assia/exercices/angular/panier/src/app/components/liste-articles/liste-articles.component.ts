import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { Article } from '../../model/Article';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']
})
export class ListeArticlesComponent implements OnInit {
  @Input() listeArticles: Article[];
  selectedArticle: Article = null;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(article: Article): void {
    this.selectedArticle = article;
  }

}
