import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Article } from '../models/Article/Article.model';
import { GetArticleDto } from '../models/Article/GetArticleDto';
import { SetArticleDto } from '../models/Article/SetArticleDto';
import { SetNewArticleDto } from '../models/Article/SetNewArticleDto';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  public url = `http://localhost:3000/articles`;

  constructor(private _http: HttpClient) {}

  public getAll(): Observable<Article[]> {
    return this._http
      .get<GetArticleDto[]>(this.url)
      .pipe(
        map((articleList: GetArticleDto[]) =>
          articleList.map((articleDto: GetArticleDto) =>
            Article.fromDto(articleDto)
          )
        )
      );
  }

  public getById(articleId: number): Observable<Article> {
    return this._http
      .get<GetArticleDto>(`${this.url}/${articleId}`)
      .pipe(map((articleDto: GetArticleDto) => Article.fromDto(articleDto)));
  }

  public create(newArticle: Article): Observable<Article> {
    console.log('artcileDto to create sent from front : ', newArticle.toNewDto());
    return this._http
      .post<GetArticleDto>(this.url, newArticle.toNewDto())
      .pipe(
        map((createdArticleDto) =>
          Article.fromDto(createdArticleDto)
        )
      );
  }

  public update(articleToUp: Article): Observable<Article> {
    console.log('=============update request sent ! ==================')
    return this._http
      .patch<GetArticleDto>(
        `${this.url}/${articleToUp.id}`,
        articleToUp.toDto()
      )
      .pipe(
        map((articleDtoUpdated: GetArticleDto) =>
          Article.fromDto(articleDtoUpdated)
        ),
        catchError((error: any) => throwError(error))
      );
  }

  public delete(articleToDel: Article): Observable<any> {
    return this._http
      .delete(`${this.url}/${articleToDel.id}`)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
