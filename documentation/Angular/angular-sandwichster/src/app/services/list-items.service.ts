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
    console.log("Dans le service");
    return this.http.get<Item[]>(this.urlAPI + 'produits')
    .pipe(map((arraItemDto: ItemDto []) => {
      return arraItemDto.map(itemDto => Item.fromDto(itemDto))
    }
    
    
    ));
  }

}
