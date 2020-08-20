import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleDto } from '../article.dto';
import { Observable, of } from 'rxjs';
import { map, tap, mergeMap} from 'rxjs/operators';
import { Article } from '../models/article.model';
import { CategoryDto } from '../category.dto';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url: string = 'http://localhost:3000/articles';
  constructor(private http: HttpClient) { }


  getCategoryById(id: number): Observable<Category>{
    return this.http.get<CategoryDto>('http://localhost:3000/categories/' + id)
    .pipe(map(dto => Category.fromDto(dto)));
  }

  getArticleById(id: number): Observable<Article>{
    return this.http.get<ArticleDto>(this.url + '/' + id)
    .pipe(
      tap(dto => console.log(dto)),
      map(articleDto => Article.fromDto(articleDto)));
  }

  getArticleCategory(articleId: number): Observable<Category>{
    return this.getArticleById(articleId)
    .pipe(
      mergeMap(article => this.getCategoryById(article.cat_id)));
  }


  getArticleWithCategory(articleId: number): Observable<Article>{
    return this.getArticleById(articleId)
    .pipe(
      mergeMap(article => this.getCategoryById(article.cat_id)
            .pipe(map(categorie => {
              article.addCategory(categorie);
              return article})
            )
    ))}


}
