import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/interfaces/iarticle';
import { MAGASIN } from '../../mock-magasin';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']
})
export class ListeArticlesComponent implements OnInit {
  listeArticles = MAGASIN;
  selectedArticle: IArticle;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(article: IArticle): void {
    this.selectedArticle = article;
  }

}
