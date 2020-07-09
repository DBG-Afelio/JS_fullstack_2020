import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import{ Order } from '../interfaces/order';
import { OrderDto } from '../interfaces/orderDto'

@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  private urlAPI: string = "http://localhost:3000/";

constructor(private http: HttpClient) { }

getAllOrders(): Observable<Order[]> {
  return this.http.get<Order[]>(this.urlAPI + 'commandes');  
  }

addOrder(){

}

}
