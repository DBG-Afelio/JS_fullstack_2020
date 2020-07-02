import { Injectable } from '@angular/core';
import { ArticleCommande } from '../model/Article-commande';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor(private http: HttpClient) { }

  getListCommande(): Observable<ArticleCommande[]> {
    return this.http.get<ArticleCommande[]>('http://localhost:3000/panier');
  }

  getArticleById(id: number): Observable<ArticleCommande> {
    return this.http.get<ArticleCommande>(`http://localhost:3000/panier/${id}`);
  }

  addArticle(payload: ArticleCommande): void {
    this.http
      .post<ArticleCommande>(`http://localhost:3000/panier`, payload)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  updateArticle(payload: ArticleCommande): void {
    this.http
      .put<ArticleCommande>(`${environment.baseUrl}/panier/${payload.panierId}`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  removeArticle(payload: ArticleCommande): void {
    this.http
      .delete<any>(`${environment.baseUrl}/panier/${payload.panierId}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
