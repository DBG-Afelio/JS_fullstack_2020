import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Pizza[]> {
    return of(null);
  }

  getPizzasById(id: number): Observable<Pizza> {
    return of(null);
  }


  createPizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .post<Pizza>(`http://localhost:3000/pizzas`, payload)
      .pipe(
        catchError((error: any) => throwError(error.json())));
  }

  updatePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .put<Pizza>(`${environment.baseUrl}/pizzas/${payload.id}`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  removePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .delete<any>(`${environment.baseUrl}/pizzas/${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
