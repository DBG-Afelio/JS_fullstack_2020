import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import{ Order } from '../interfaces/order';
import { OrderDto } from '../interfaces/orderDto'
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  private urlAPI: string = "http://localhost:3000/";

constructor(private http: HttpClient) { }

getAllOrders(): Observable<Order[]> {
  return this.http.get<Order[]>(this.urlAPI + 'commandes')
  .pipe(map((arrayOrdersDto: OrderDto []) => {
    return arrayOrdersDto.map(OrderDto => Order.fromDto(OrderDto))
  }
  ));
  }

getAllOrders_WithORWithoutDTO(){
  return this.http.get<Order[]>(this.urlAPI + 'commandes');
}

createOrder(payload: Order): Observable<Order> {
  return this.http
  .post<Order>(`${this.urlAPI}commandes`, payload.toDto())
  .pipe(catchError((error: any) => throwError(error)));
}

updateOrder(payload: Order): Observable<Order> {
  return this.http.put<Order>(`${this.urlAPI}commandes/${payload.id}`, payload.toDto())
  .pipe(catchError((error: any) => throwError(error)));

}

deleteOrder(payload: Order): Observable<Order> {
  return this.http
    .delete<any>(`${this.urlAPI}commandes/${payload.id}`)
    .pipe(catchError((error: any) => throwError(error)));

}

getOrderById(id: number): Observable<Order> {
  return this.http
  .get<Order>(this.urlAPI + `commandes/${id}`)
  .pipe(map((orderDto: OrderDto) => {
    return Order.fromDto(orderDto)
  }));
}

}
