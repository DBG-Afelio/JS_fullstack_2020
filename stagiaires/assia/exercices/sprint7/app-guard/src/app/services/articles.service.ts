import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Article } from '../models/Article/Article.model';
import { GetArticleDto } from '../models/Article/GetArticleDto';
import { SetArticleDto } from '../models/Article/SetArticleDto';
import { SetNewArticleDto } from '../models/Article/SetNewArticleDto';
@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  public url = `${environment.baseApiUrl}/articles`;
  // public url = `https://api.assia-rachdi.ga/articles`;
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

  public saveArticle(article: Article): Observable<Article> {
    console.log('saving article')
    let ret: Observable<Article> = null;
    if (article.id === 0) {
      console.log('new article')

      ret = this._http
        .post<GetArticleDto>(this.url, article.toNewDto())
        .pipe(map((createdArticleDto) => Article.fromDto(createdArticleDto)));
    } else {
      console.log('update article')

      ret = this._http
        .patch<GetArticleDto>(`${this.url}/${article.id}`, article.toDto())
        .pipe(
          map((articleDtoUpdated: GetArticleDto) =>
            Article.fromDto(articleDtoUpdated)
          )
        );
    }
    return ret;
  }


  public delete(articleToDel: Article): Observable<any> {
    return this._http
      .delete(`${this.url}/${articleToDel.id}`)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
