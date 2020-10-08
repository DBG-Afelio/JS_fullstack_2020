import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/Article/Article.model';
import { User } from 'src/app/models/User/User.model';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent implements OnInit {
  @Input()
  public article: Article = null;
  @Input()
  public user: User = null;
  constructor() {}
  @Output()
  public articleChange: EventEmitter<Article> = new EventEmitter();

  ngOnInit(): void {}

  public emitArticleChange(article: Article): void {
    this.articleChange.emit(article);
    console.log('EMIT 2-------------- submitted article : ', article);
  }
}
