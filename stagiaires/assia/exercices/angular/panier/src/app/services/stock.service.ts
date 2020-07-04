import { Injectable } from '@angular/core';
import { Article } from '../model/Article';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  constructor(private http: HttpClient) {}

  getArticlesStock(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/articles');
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
  }
  
}
