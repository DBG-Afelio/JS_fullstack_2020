import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../model/Article';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  @Input() listeArticle: Article[] = [];
  @Output() selectArticleEvent: EventEmitter<Article> = new EventEmitter();

  selectedArticle: Article = null;

  constructor() {
  }

  ngOnInit() {
  }

  selectArticle(article: Article) {
    this.selectedArticle = article;
    this.selectArticleEvent.emit(this.selectedArticle);
  }

}
