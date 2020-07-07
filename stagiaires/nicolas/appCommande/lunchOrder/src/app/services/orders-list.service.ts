import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersListService {

  constructor() { }

  //getOrders

  getOrdersList():Order[] | null{

    return null

  }
  getOrderById(orderId:number):Order | null{

    return null

  }
  getOrdersByUserId(userId:number):Order[] | null{

    return null

  }


//modifyOrders

  addOrder(newOrder:Order){



  }
  removeOrder(orderId:number){

    

  }
  updateOrder(updatedOrder:Order){

    

  }
}
