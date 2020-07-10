import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import{ Order } from '../interfaces/order';
import { OrderDto } from '../interfaces/orderDto'
import { UserService } from './user.service';
import { UserModel } from '../interfaces/user.model';

import { ListItemsService } from '../services/list-items.service'
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  private urlAPI: string = "http://localhost:3000/";

constructor(private http: HttpClient,
  public userService: UserService,
  public listItemsService: ListItemsService
  ) { }

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

  getUserInListOrders(): Observable<Order[]> { //Benoit: c'est moi qui ai ajouté ça, la méthode au-dessus ne prend pas compte de OrderDto

    return this.http.get<Order[]>(this.urlAPI + 'commandes')
      .pipe(
        map((arrayOrdersDto: OrderDto []) => {
          return arrayOrdersDto.map(orderDto => Order.fromDto(orderDto))
        }), 
        mergeMap( (newArrayOrders: Order []) => { 
          return this.userService.getUsers().pipe(
            map((arrayUsers: UserModel[]) => {
              newArrayOrders.forEach( order => {
                order.user = arrayUsers.find(user => user.id === order.id)}
              )
              return newArrayOrders;
            })
        )}) 
      );
  }

  getProductNameInListOrders(): Observable<Order[]> { //Benoit: c'est moi qui ai ajouté ça, la méthode au-dessus ne prend pas compte de OrderDto

  return this.http.get<Order[]>(this.urlAPI + 'commandes')
    .pipe(
      map((arrayOrdersDto: OrderDto []) => {
        return arrayOrdersDto.map(orderDto => Order.fromDto(orderDto))
      }), 
      mergeMap( (newArrayOrders: Order []) => { 
        return this.listItemsService.getListItems().pipe(
          map((arrayItems: Item[]) => {
            newArrayOrders.forEach( order => {
              order.item = arrayItems.find(item => item.id === order.product_id)}
            )
            return newArrayOrders;
          })
      )}) 
    );
}

}
