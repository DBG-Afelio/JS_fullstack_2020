import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Article } from 'src/app/models/Article/Article.model';
import { User } from 'src/app/models/User/User.model';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css'],
})
export class ArticleItemComponent implements OnInit, OnChanges {
  @Input()
  public articleList: Article[] = null;
  @Input()
  public currUser: User = null;
  @Input()
  public columnsToShow: string[] = [];
  @Output()
  public articleChange: EventEmitter<Article> = new EventEmitter();

  public isDetailView = false;
  public article: Article = null;

  public headerList: string[] = [
    'id',
    'title',
    'content',
    'author',
    'publiDate',
    'imageUrl',
    'status',
    'comments',
    'tags',
  ];

  public routeBefore: string = '';
  constructor(private _activRoute: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.routeBefore = this._router.url;
    console.log('parent route : ', this.routeBefore);
  }

  public showDetail(articleToShow: Article): void {
    this.article = articleToShow;
    this.isDetailView = true;
    console.log('is detail view :', this.isDetailView);
  }

  public goBack(): void {
    this.isDetailView = false;
    this._router.navigate([this.routeBefore]);
  }

  public emitChange(article: Article): void {
    this.articleChange.emit(article);
    console.log('EMIT 3-------------- submitted article : ', article);
  }
}
