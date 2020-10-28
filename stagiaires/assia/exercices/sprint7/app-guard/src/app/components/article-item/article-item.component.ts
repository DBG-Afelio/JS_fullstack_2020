import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { RolesEnum } from 'src/app/enum/roles.enum';
import { StatusEnum } from 'src/app/enum/status.enum';

import { Article } from 'src/app/models/Article/Article.model';
import { User } from 'src/app/models/User/User.model';
import { ArticlesService } from 'src/app/services/articles.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css'],
})
export class ArticleItemComponent implements OnInit, OnDestroy {
  public currUserSub: Subscription;
  public currUser: User;
  public articleList: Article[] = [];
  public filteredList = [];
  public columnsToShow: string[] = [];

  // public article: Article = null;

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

  constructor(
    private _activRoute: ActivatedRoute,
    private _router: Router,
    private _artService: ArticlesService,
    private _authService: AuthService
  ) {
    _router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        let currUrl = event['urlAfterRedirects'];
        this.setCustomList(currUrl);
      });

      this._artService.getAll().subscribe((list) => (this.articleList = list));
  }

  ngOnInit(): void {
    this.currUserSub = this._authService.currentUser.subscribe(
      (value: User) => (this.currUser = value)
    );
  }

  ngOnDestroy(): void {
    this.currUserSub.unsubscribe();
  }


  public setCustomList(route: string): void {
    this.filteredList = [];
    if (this.articleList?.length > 0) {
      this.columnsToShow = ['title', 'tags', 'author', 'publiDate', 'status'];

      if (route.includes('draft')) {
        this.filteredList = this.articleList.filter(
          (art: Article) =>
            art.status === StatusEnum.IN_PROGRESS &&
            this.currUser.id === art.author.id
        );
        this.columnsToShow = ['title', 'tags', 'status'];
      } else if (route.includes('pending')) {
        this.filteredList = this.articleList.filter(
          (art: Article) => art.status === StatusEnum.TO_REVIEW
        );
        if (this.currUser.role === RolesEnum.AUTHOR) {
          this.filteredList = this.filteredList.filter(
            (art: Article) => this.currUser.id === art.author.id
          );
          this.columnsToShow = ['title', 'tags', 'publiDate', 'status'];
        }
      } else if (route.includes('published')) {
        this.filteredList = this.articleList.filter(
          (art: Article) => art.status === StatusEnum.PUBLISHED
        );
        if (this.currUser.role === RolesEnum.AUTHOR) {
          this.filteredList = this.filteredList.filter(
            (art: Article) => this.currUser.id === art.author.id
          );
          this.columnsToShow = ['title', 'tags', 'publiDate'];
        }
      }
    }
  }
}
