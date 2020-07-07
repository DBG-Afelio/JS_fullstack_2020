import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators'
import { IOrderDto } from './../../models/orderModel/iorder-dto';
import { Order } from 'src/app/models/orderModel/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public orderUrl: string = 'http://localhost:3000/commandes';

  constructor(private http: HttpClient) { }

  public getList(): Observable<Order> {
    return this.http.get<IOrderDto[]>(this.orderUrl)
      .pipe(
        mergeMap((orderDtoList) => {
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
}
