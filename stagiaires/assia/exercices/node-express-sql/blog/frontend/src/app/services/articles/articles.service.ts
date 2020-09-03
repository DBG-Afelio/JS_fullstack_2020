import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Article } from '../../models/articleModel/Article';
import { ArticleDto, ArticleListDto } from 'src/app/models/articleModel/ArticleDto';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  url: string = "http://localhost:3000/articles";

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public getArticleList():Observable<Article[]> {
    return this.http.get<ArticleDto[]>(this.url)
      .pipe(
        map((articleListDto: ArticleDto[]) => {
          return articleListDto.map((articleDto) => Article.fromDto(articleDto));
        })
    );
  }

  public getArticleById(id:number): Observable<Article>{
    return this.http.get<ArticleDto>(`${this.url}/${id}`)
      .pipe(
        map((articleDto:ArticleDto) => Article.fromDto(articleDto))
    )
  }

}
