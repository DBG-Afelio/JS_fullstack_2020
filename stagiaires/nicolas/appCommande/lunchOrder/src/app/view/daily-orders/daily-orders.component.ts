import { Component, OnInit } from '@angular/core';
import { OrdersListService } from 'src/app/services/orders-list.service';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-daily-orders',
  templateUrl: './daily-orders.component.html',
  styleUrls: ['./daily-orders.component.css']
})
export class DailyOrdersComponent implements OnInit {

  ordersList:Order[]

  constructor(private orderListService:OrdersListService) { }

  ngOnInit(): void {

    this.orderListService.getMergedOrdersList().subscribe(ordersListFound => {

      this.ordersList = ordersListFound.filter(order => order.date.getDate() === new Date().getDate())

      })

  }

}
