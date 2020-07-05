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
    return this.http.get<ArticleCommande[]>(this.panierUrl)
      .pipe(
        catchError(()=> throwError('getListCommande failed')))
  }
  // findCommand(art: Article): Observable<ArticleCommande | null> {
  //   let found: ArticleCommande = null;
  //   this.getListCommande().pipe(map(listCom => {
  //     listCom.find(artCom => artCom.article === art ? found = artCom : found)
  //   }));
  //   return found;
  // }

  getPrixTotal(): Observable<number> {
    return this.getListCommande().pipe(map(articlesCom => articlesCom.reduce((accPrix, currArt) => accPrix + (currArt.article.prix * currArt.quantite), 0 )))
  }

  getQtteTotale(): Observable<number> {
    return this.getListCommande().pipe(map(articlesCom => articlesCom.reduce((accQtte, currArt) => accQtte + currArt.quantite, 0 )))
  }



  addArticle(payload: ArticleCommande): Observable<ArticleCommande> {
    return this.http
      .post<ArticleCommande>(this.panierUrl, payload)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  updateArticle(payload: ArticleCommande): Observable<ArticleCommande> {
    return this.http
      .put<ArticleCommande>(`${environment.baseUrl}/panier/${payload.panierId}`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  removeArticle(payload: ArticleCommande): Observable<ArticleCommande> {
    return this.http
      .delete<any>(`${environment.baseUrl}/panier/${payload.panierId}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
