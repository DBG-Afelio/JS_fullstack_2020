import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../models/article/article';
import { HttpClient } from '@angular/common/http';
import { ArticleDto } from '../models/article/article-dto';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http:HttpClient) { }

  getAllArticles():Observable<Article[]>{

    return this.http.get<ArticleDto[]>('http://localhost:3000/articles')
      .pipe(
        map((articlesDto:ArticleDto[]) => {

          return articlesDto.map((articleDto:ArticleDto) => Article.fromDto(articleDto))

        })

      )
  }
  getArticleById(articleId:number):Observable<Article>{

    return this.http.get<ArticleDto>(`http://localhost:3000/articles/${articleId.toString()}`)
      .pipe(
        map((articleDto:ArticleDto) => {
          
          return Article.fromDto(articleDto)

        })

      )
  }
  createArticle(newArticle:Article){

    return this.http.post<ArticleDto>('http://localhost:3000/articles',newArticle.toDto())

  }
  deleteArticle(articleId:number){
    
    return this.http.delete<ArticleDto>(`http://localhost:3000/articles/${articleId.toString()}`)

  }

}
