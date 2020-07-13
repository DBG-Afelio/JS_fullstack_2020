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

  minOrderHour:number = 6;
  maxOrderHour:number = 24;

  constructor(private http:HttpClient,
              private providersListService:ProvidersListService,
              private usersListService:UsersListService ) {}

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

                  const orderProductOptions = productsList.find(product => product.id === order.productId).options;

                  order.setOptions(orderProductOptions.filter(option => order.optionsId.includes(option.id)))
                  order.setTotalPrice()
                  
                })
                return ordersList

              })
            )
  }
  

  getUserOrders(userId:number):Observable<Order[]>{

    return this.http.get<OrderDto[]>(`http://localhost:3000/commandes?user_id=${userId}`)
    .pipe(
      map((arrayOrderDto:OrderDto[]) => {
        return arrayOrderDto.map((orderDto:OrderDto) => Order.fromDto(orderDto)) 
      })
    )
  }


//modifyOrders

  addOrder(newOrder:Order){

    return this.http.post<Order>('http://localhost:3000/commandes',newOrder.toDto())

  }
  removeOrder(orderId:number){

    return this.http.delete<OrderDto>(`http://localhost:3000/commandes/${orderId}`)

  }
  updateOrder(updatedOrder:Order){

    return this.http.put<OrderDto>('http://localhost:3000/commandes/' + updatedOrder.id,updatedOrder.toDto())

  }
}
