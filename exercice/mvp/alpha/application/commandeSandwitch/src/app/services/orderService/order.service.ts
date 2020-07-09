import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'
import { IOrderDto } from './../../models/orderModel/iorder-dto';
import { Order } from 'src/app/models/orderModel/order';
import { User } from 'src/app/models/userModel/user';
import { UserService } from '../userService/user.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private currentUser: User = null;
  private userOrder: BehaviorSubject<Order> = new BehaviorSubject(null);
  public orderUrl: string = 'http://localhost:3000/commandes';

  constructor(private http: HttpClient, private userService: UserService) { 
userService
   }

  public getList(): Observable<Order[]> {
    return this.http.get<IOrderDto[]>(this.orderUrl)
      .pipe(
        map((orderDtoList) => {
          return orderDtoList.map((orderDto) => Order.fromDto(orderDto))
        }
      )
    );
  }

  public getOrderById(id: number): Observable<Order> {
    return this.http.get<IOrderDto>(`${this.orderUrl}/${id}`)
      .pipe(
        map((orderDto) => Order.fromDto(orderDto))
    );
  }

  public getOrderByUser(user: User): Observable<Order> {
    return this.getList()
      .pipe(
        map((orders) => orders.find(order => order.userId === user.id))
    );
  }

}
