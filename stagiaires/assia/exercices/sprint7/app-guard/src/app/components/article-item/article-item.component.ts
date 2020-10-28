import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  ActivatedRoute,
  Event,
  NavigationEnd,
  Router,
  RoutesRecognized,
} from '@angular/router';
import { forkJoin, Subscription } from 'rxjs';
import { filter, pairwise } from 'rxjs/operators';
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
  public articleList: Article[] = [];
  public filteredList = [];
  public columnsToShow: string[] = [];

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
    // Testing previous and current url
    // this._router.events
    //   .pipe(
    //     filter((evt: any) => evt instanceof RoutesRecognized),
    //     pairwise()
    //   )
    //   .subscribe((events: RoutesRecognized[]) => {
    //     console.log('previous url', events[0].urlAfterRedirects);
    //     console.log('current url', events[1].urlAfterRedirects);
    //   });
  }

  ngOnInit(): void {
    this._artService.getAll().subscribe((articleList: Article[]) => {
      this.articleList = articleList;
      this.setCustomList(
        this._router.url,
        this._authService.currentUser.getValue()
      );
    });
  }

  ngOnDestroy(): void {}

  public setCustomList(route: string, currUser: User): void {
    this.filteredList = [];
    if (this.articleList?.length > 0) {
      this.columnsToShow = ['title', 'tags', 'author', 'publiDate', 'status'];

      if (route.includes('draft')) {
        this.filteredList = this.articleList.filter(
          (art: Article) =>
            art.status === StatusEnum.IN_PROGRESS &&
            currUser.id === art.author.id
        );
        this.columnsToShow = ['title', 'tags', 'status'];
      } else if (route.includes('pending')) {
        this.filteredList = this.articleList.filter(
          (art: Article) => art.status === StatusEnum.TO_REVIEW
        );
        if (currUser.role === RolesEnum.AUTHOR) {
          this.filteredList = this.filteredList.filter(
            (art: Article) => currUser.id === art.author.id
          );
          this.columnsToShow = ['title', 'tags', 'publiDate', 'status'];
        }
      } else if (route.includes('published')) {
        this.filteredList = this.articleList.filter(
          (art: Article) => art.status === StatusEnum.PUBLISHED
        );
        if (currUser.role === RolesEnum.AUTHOR) {
          this.filteredList = this.filteredList.filter(
            (art: Article) => currUser.id === art.author.id
          );
          this.columnsToShow = ['title', 'tags', 'publiDate'];
        }
      } else {
        //all published
        this.filteredList = this.articleList.filter(
          (a) => a.status === StatusEnum.PUBLISHED
        );
        this.columnsToShow = ['title', 'tags', 'author', 'publiDate'];
      }
    }
  }
}
