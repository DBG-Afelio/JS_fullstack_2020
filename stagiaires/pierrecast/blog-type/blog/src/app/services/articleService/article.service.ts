import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/articleModel/Article';
import { ArticleDto } from 'src/app/models/articleModel/ArticleDto';
import { AuteurService } from '../auteurService/auteur.service';
import { Auteur } from 'src/app/models/auteurModel/Auteur';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url: string = 'http://localhost:8080/articles';

  constructor(
    private http: HttpClient,
    private router: Router,
    private auteurService: AuteurService
  
  ) { }

  public getList(): Observable<Article[]> {
    return forkJoin(
       this.http.get<ArticleDto[]>(this.url),
       this.auteurService.getList)
      .pipe(
        map(([arrayArticleDto , arrayAuteur]: [ ArticleDto[], Auteur[] ]) => {
          return arrayArticleDto.map(articleDto => Article.fromDto(articleDto, arrayAuteur.find(auteur => articleDto.auteur_id == auteur.id)));
        }),
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
        mergeMap(articleDto => this.auteurService.getAuteurById(articleDto.auteur_id)
          .pipe(
            map(auteur => Article.fromDto(articleDto, auteur)))
        ),catchError((error: any) => Observable.throw(error.json())));
  }

  removeArticle(payload: Article): Observable<Article> {
    return this.http
      .delete<any>(`${this.url}/${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  public getArticleWithAuteurById(id: number): Observable<Article>  {
    return this.http.get<ArticleDto>(this.url + '/' +id)
      .pipe(
        mergeMap(articleDto => this.auteurService.getAuteurById(articleDto.auteur_id)
          .pipe(
            map(auteur => Article.fromDto(articleDto, auteur)))
        )
      )
    ;
  }
}
