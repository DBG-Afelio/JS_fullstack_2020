import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { HttpClient } from '@angular/common/http';
import { OrderDto } from '../models/order-dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrdersListService {

  constructor(private http:HttpClient) { }

  //getOrders

  getOrdersList():Observable<Order[]>{

    return this.http.get<OrderDto[]>('http://localhost:3000/commandes')
    .pipe(
      map((arrayOrderDto:OrderDto[]) => {
        return arrayOrderDto.map((orderDto:OrderDto) => Order.fromDto(orderDto)) 
      })
    )
  }
  getOrderById(orderId:number):Observable<Order>{

    return this.http.get<OrderDto>(`http://localhost:3000/commandes/${orderId}`)
    .pipe(
      map((orderDto:OrderDto) => {
        return Order.fromDto(orderDto) 
      })
    )

  }


//modifyOrders

  addOrder(newOrder:Order){

    this.http.post<Order>('http://localhost:3000/commandes',newOrder.toDto())

  }
  removeOrder(orderId:number){

    this.http.delete<OrderDto>(`http://localhost:3000/commandes/${orderId}`)

  }
  updateOrder(updatedOrder:Order){

    this.removeOrder(updatedOrder.id)
    this.addOrder(updatedOrder)

  }
}
