import { Injectable } from '@angular/core';
import { Observable, throwError, of, forkJoin } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import{ Order } from '../interfaces/order';
import { OrderDto } from '../interfaces/orderDto';
import { UserService } from './user.service';
import { UserModel } from '../interfaces/user.model';
import { ListItemsService } from '../services/list-items.service'
import { Item } from '../interfaces/item';


@Injectable({
  providedIn: 'root'
})

// PIERRE

export class OrdersService {

private timeLimit: string;
private creditLimit: number= 10;

public hasUserAlreadyOrdered: boolean; // ESSAI MEMO COM AVEC BOOL
public todayUserOrder: Order;
public receivedPrice: number;

  private urlAPI: string = "http://localhost:3000/";

constructor(private http: HttpClient,
  public userService: UserService,
  public listItemsService: ListItemsService,

  ) { }

getCreditLimit(){
  return this.creditLimit;
}

getTimeLimitResponse(){
  this.timeLimit = '23:00:00';
  let today = new Date();
  let currentHours = today.getHours();
  let time = ("0" + currentHours).slice(-2) + ":" + today.getMinutes() + ":" + today.getSeconds();
  let response = time < this.timeLimit;
  return response;
}

getAllOrders(): Observable<Order[]> {
  return this.http.get<OrderDto[]>(this.urlAPI + 'commandes')
  .pipe(map((arrayOrdersDto: OrderDto []) => {
    return arrayOrdersDto.map(OrderDto => Order.fromDto(OrderDto))
  }
  ));
}

getAllOrders_WithORWithoutDTO(){
  return this.http.get<OrderDto[]>(this.urlAPI + 'commandes');
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

  getUsersAndProductsNameInListOrders(): Observable<Order[]> { 

    return forkJoin(
      this.getAllOrders(), 
      this.userService.getUsers(),
      this.listItemsService.getListItemsWithSupplier(),

    ).pipe(map (([orders, users, items]) => {
      orders.forEach( order => {
        order.user = users.find(user => user.id === order.id)
        order.item = items.find(item => item.id === order.product_id)
      }  
        )
        return orders;
    }))
}

userHasAlreadyOrdered(boolResponse){
  this.hasUserAlreadyOrdered = boolResponse;
}

}