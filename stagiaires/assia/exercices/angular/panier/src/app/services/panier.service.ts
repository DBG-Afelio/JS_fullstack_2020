import { Injectable } from '@angular/core';
import { ArticleCommande } from '../model/Article-commande';
import { Observable, throwError, from } from 'rxjs';
import { catchError, map, reduce } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  panierUrl: string = 'http://localhost:3000/panier';
  constructor(private http: HttpClient) { }

  getListCommande(): Observable<ArticleCommande[]> {
    return this.http.get<ArticleCommande[]>(this.panierUrl)
      .pipe(
        catchError(()=> throwError('getListCommande failed')))
  }

  getPrixTotal(): Observable<number> {
    return this.getListCommande().pipe(map(articlesCom => articlesCom.reduce((accPrix, currArt) => accPrix + currArt.getPrixTotal(), 0 )))
  }

  getQtteTotale(): Observable<number> {
    return this.getListCommande().pipe(map(articlesCom => articlesCom.reduce((accQtte, currArt) => accQtte + currArt.getQtte(), 0 )))
  }

  getArticleById(id: number): Observable<ArticleCommande> {
    return this.http.get<ArticleCommande>(`${this.panierUrl}/${id}`);
  }

  addArticle(payload: ArticleCommande): void {
    this.http
      .post<ArticleCommande>(this.panierUrl, payload)
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
