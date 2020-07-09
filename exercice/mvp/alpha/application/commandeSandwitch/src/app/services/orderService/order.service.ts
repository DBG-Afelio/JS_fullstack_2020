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

  private userOrder: BehaviorSubject<Order> = new BehaviorSubject(null);
  public orderUrl: string = 'http://localhost:3000/commandes';

  constructor(private http: HttpClient, private userService: UserService) { 
    userService.getCurrentUser().subscribe((currentUser) => {
      console.log('from orderService', currentUser); // quid si findOrder is undefined ?
      if (currentUser) {
        this.findOrderByUser(currentUser).subscribe((currOrder) => {
          if (currOrder) {
            this.setCurrUserOrder(currOrder);
            console.log('commande trouvee ?', currOrder);
          } else {
            console.log('pas de commande trouvee pour user : ', currentUser);
            this.setCurrUserOrder(null);
          }
        });
      } else {
        console.log('pas de user connected ');
        this.setCurrUserOrder(null);
      }
    });
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

  public findOrderByUser(user: User): Observable<Order> {
    return this.getList()
      .pipe(
        map((orders) => orders.find(order => order.userId === user.id))
    );
  }

  public setCurrUserOrder(order:Order): void {
    this.userOrder.next(order);
  }

  public getCurrUserOrder(): Observable<Order> {
    return this.userOrder.asObservable();
  }

}
