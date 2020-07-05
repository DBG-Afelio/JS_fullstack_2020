import { Injectable } from '@angular/core';
import { ArticleCommande } from '../model/Article-commande';
import { Observable, throwError, from } from 'rxjs';
import { catchError, map, reduce, mergeMap, find } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Article } from '../model/Article';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  panierUrl: string = 'http://localhost:3000/panier';
  constructor(private http: HttpClient) { }

  getListCommande(): Observable<ArticleCommande[]> {
    return this.http
      .get<ArticleCommande[]>(this.panierUrl)
      .pipe(
        catchError(() => throwError('getListCommande failed')));
  }
  findIfArticlePanierById(id: number): Observable<ArticleCommande | any>{
    return this.http
      .get<ArticleCommande>(`${this.panierUrl}/${id}`)
      .pipe(
        catchError(() => throwError('Article introuvable dans le panier')));
  }
  getPrixTotal(): Observable<number> {
    return this.getListCommande().pipe(map(articlesCom => articlesCom.reduce((accPrix, currArt) => accPrix + (currArt.article.prix * currArt.quantite), 0 )))
  }

  getQtteTotale(): Observable<number> {
    return this.getListCommande().pipe(map(articlesCom => articlesCom.reduce((accQtte, currArt) => accQtte + currArt.quantite, 0 )))
  }

  updatePanier(payload: ArticleCommande, qt: number): Observable<ArticleCommande> {
    payload.quantite = qt;
    if (payload.id === 0) {
      return this.http
        .post<ArticleCommande>(this.panierUrl, payload)
        .pipe(catchError((error: any) => throwError(error.json())));
    } else {
      if (payload.quantite === 0) {
        return this.http
          .delete<any>(`${environment.baseUrl}/panier/${payload.id}`)
          .pipe(catchError((error: any) => Observable.throw(error.json())));
      } else {
        return this.http
          .put<ArticleCommande>(`${environment.baseUrl}/panier/${payload.id}`, payload)
          .pipe(catchError((error: any) => Observable.throw(error.json())));
      }
    }
    
  }

}
