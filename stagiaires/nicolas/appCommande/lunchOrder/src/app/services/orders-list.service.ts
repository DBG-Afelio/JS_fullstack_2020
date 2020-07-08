import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { HttpClient } from '@angular/common/http';
import { OrderDto } from '../models/order-dto';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProvidersListService } from './providers-list.service';
import { UsersListService } from './users-list.service';


@Injectable({
  providedIn: 'root'
})
export class OrdersListService {

  constructor(private http:HttpClient, private providersListService:ProvidersListService, private usersListService:UsersListService ) { }

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

  getMergedOrdersList():Observable<Order[]>{

    return forkJoin(this.getOrdersList(),this.providersListService.getProductsList(),this.usersListService.getUsersList())
            .pipe(

              map(([ordersList,productsList,usersList]) => { 

                ordersList.forEach(order => {

                  order.setProduct(productsList.find(product => product.id === order.productId))
                  order.setUser(usersList.find(user => user.id === order.userId))

                })
                return ordersList

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
