import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/Article/Article.model';
import { User } from 'src/app/models/User/User.model';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent implements OnInit {
  public article: Article = null;
  constructor(
    private _activRoute: ActivatedRoute,
    private _artService: ArticlesService
  ) {
    this._activRoute.paramMap.subscribe((params) => {
      let id = Number(params.get('articleId'));
      console.log('id article: ', id)
      if (id) {
        this._artService.getById(id).subscribe((art) => {
          this.article = art;
        });
      }
    });
  }

  ngOnInit(): void {}
}
