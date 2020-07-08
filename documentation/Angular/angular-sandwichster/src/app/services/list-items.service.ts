import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import{ Item } from '../interfaces/item';
import { ItemDto } from '../interfaces/itemDto'

@Injectable({
  providedIn: 'root'
})
export class ListItemsService {

  private urlAPI: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getListItems(): Observable<Item[]> {

    return this.http.get<Item[]>(this.urlAPI + 'produits')
    .pipe(map((arrayItemDto: ItemDto []) => {
      return arrayItemDto.map(itemDto => Item.fromDto(itemDto))
    }
    ));
  }

  getItemById(id: number): Observable<Item> {
    return this.http.get<Item>(this.urlAPI + `produits/${id}`)
    .pipe(map( (itemDto: ItemDto) => {
      return Item.fromDto(itemDto)
    }));
  }

  createItem(payload: Item): Observable<Item> {
    return this.http
      .post<Item>(`${this.urlAPI}produits`, payload.toDto())
      .pipe(catchError((error: any) => throwError(error)));
  }

  updateItem(payload: Item): Observable<Item> {
    return this.http
      .put<Item>(`${this.urlAPI}produits/${payload.id}`, payload.toDto())
      .pipe(catchError((error: any) => throwError(error)));
  }

  removeItem(payload: Item): Observable<Item> {
    return this.http
      .delete<any>(`${this.urlAPI}produits/${payload.id}`)
      .pipe(catchError((error: any) => throwError(error)));
  }

}
