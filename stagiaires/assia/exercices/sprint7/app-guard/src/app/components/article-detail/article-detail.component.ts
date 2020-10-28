import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/Article/Article.model';
import { User } from 'src/app/models/User/User.model';
import { ArticlesService } from 'src/app/services/articles.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent implements OnInit {
  public article: Article = null;
  public isPrivate: boolean = true;
  public currUser: User = null;

  constructor(
    private _activRoute: ActivatedRoute,
    private _artService: ArticlesService,
    private _authService: AuthService,
    private _router: Router,
  ) {
    this.currUser = this._authService.currentUser.getValue();
    this.isPrivate = this._router.url.includes('private');
    this._activRoute.paramMap.subscribe((params) => {
      let id = Number(params.get('articleId'));

      if (id) {
        this._artService.getById(id).subscribe((art) => {
          this.article = art;
        });
      }
    });
  }

  ngOnInit(): void {
  }
}
