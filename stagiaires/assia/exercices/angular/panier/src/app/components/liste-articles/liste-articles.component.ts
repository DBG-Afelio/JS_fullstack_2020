import { Component, OnInit } from '@angular/core';
import { Article } from '../../model/article';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']
})
export class ListeArticlesComponent implements OnInit {
  listeArticles: Article[];
  selectedArticle: Article;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(article: Article): void {
    this.selectedArticle = article;
  }

}
