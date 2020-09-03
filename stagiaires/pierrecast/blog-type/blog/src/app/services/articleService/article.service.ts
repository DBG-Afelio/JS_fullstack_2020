import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/articleModel/Article';
import { ArticleDto } from 'src/app/models/articleModel/ArticleDto';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url: string = 'http://localhost:8080/articles';

  constructor(
    private http: HttpClient,
    private router: Router,
  
  ) { }

  public getList(): Observable<Article[]> {
    return this.http.get<ArticleDto[]>(this.url)
      .pipe(
        map((arrayArticleDto : ArticleDto[]) => {
          return arrayArticleDto.map(articleDto => Article.fromDto(articleDto));
        }),
      )
    ;
  }

  public getArticleById(id: number): Observable<Article> {
    return this.http.get<ArticleDto>(this.url + '/' +id)
      .pipe(
        map(articleDto => Article.fromDto(articleDto)),
      )
    ;
  }

  createArticle(payload: Article): Observable<Article> {
    return this.http
      .post<Article>(this.url, payload.toDto())
      .pipe(
        catchError((error: any) => throwError(error.json())));
  }

  updateArticle(payload: Article): Observable<Article> {
    return this.http
      .put<ArticleDto>(`${this.url}/${payload.id}`, payload.toDto())
      .pipe(
        map((articleDto : ArticleDto) => {
          return Article.fromDto(articleDto);
        }),catchError((error: any) => Observable.throw(error.json())));
  }

  removeArticle(payload: Article): Observable<Article> {
    return this.http
      .delete<any>(`${this.url}/${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
