import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Article } from 'src/app/models/articleModels/Article';
import { ArticleDto } from 'src/app/models/articleModels/ArticleDto';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url: string = 'https://api.pierre-cast.ga/article';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  /*public getMyArticles(id:number): Observable<Article[]> {
    return this.http.get<ArticleDto[]>(this.url)
      .pipe(
        map((arrayArticleDto : ArticleDto[]) => {
          return arrayArticleDto.map(articleDto => Article.fromDto(articleDto));
        })
      )
    ;
  }*/

  public getMyArticles(): Observable<Article[]> {
    return this.http.get<ArticleDto[]>(this.url + "/mes-articles")
      .pipe(
        map((arrayArticleDto : ArticleDto[]) => {
          return arrayArticleDto.map(articleDto => Article.fromDto(articleDto));
        })
      )
    ;
  }

  public getList(): Observable<Article[]> {
    return this.http.get<ArticleDto[]>(this.url)
      .pipe(
        map((arrayArticleDto : ArticleDto[]) => {
          return arrayArticleDto.map(articleDto => Article.fromDto(articleDto));
        })
      )
    ;
  }

  public getPublishedList(): Observable<Article[]> {
    return this.http.get<ArticleDto[]>(this.url)
      .pipe(
        map((arrayArticleDto : ArticleDto[]) => {
          return arrayArticleDto
            .map(articleDto => Article.fromDto(articleDto))
            .filter(article => article.published)
            ;
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

  public getFrDate(brut:Date):string {
    let date = new Date(brut);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let weekday = date.getDay();
    let txt = `${this.weekday(weekday)} ${day} ${this.month(month)} ${year}`;
    
    return txt;
  }

  public month(month:number): string {
    let fr = ['janv.', 'fév.', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'sept.', 'oct.', 'nov.', 'déc.',];
    return fr[month];
  }

  public weekday(day: number): string {
    let fr = [ 'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    return fr[day];
  }

  createArticle(payload: Article): Observable<Article> {
    return this.http
      .post<Article>(this.url, payload.toDto())
      .pipe(
        tap(article => {console.log('article ajouté', article)}),
        catchError((error: any) => throwError(error))
      );
  }

  updateArticle(payload: Article): Observable<Article> {
    return this.http
      .patch<Article>(`${this.url}/${payload.id}`, payload.toDto())
      .pipe(
        catchError((error: any) => throwError(error))
      );
  }

  removeArticle(payload: Article): Observable<Article> {
    return this.http
      .delete<any>(`${this.url}/${payload.id}`)
      .pipe(
        catchError((error: any) => throwError(error))
      );
  }

  public navigateToAdmin() {
    this.router.navigateByUrl(`/admin/articles`);
  }

  public findArticles(
    filter = '', sortOrder = 'asc', pageNumber = 0, pageSize = 10
  ):  Observable<Article[]> {

   return this.http.get(this.url).pipe(
     map((items: any[]) => items.map(item => Article.fromDto(item)))
   );
  }
}
