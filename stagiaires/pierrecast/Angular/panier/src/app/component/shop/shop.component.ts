import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Article } from 'src/app/model/Article';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @Input() listArticles: Article[] = [];
  @Output() selectArticleEvent: EventEmitter<Article> = new EventEmitter();

  selectedArticle: Article = null;

  constructor() { }

  selectArticle(article: Article) {
    this.selectedArticle = article;
    this.selectArticleEvent.emit(article);
  }

  ngOnInit(): void {
  }
}
