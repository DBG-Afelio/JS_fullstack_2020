import { Component, OnInit } from '@angular/core';
import { OrdersListService } from 'src/app/services/orders-list.service';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.css']
})
export class OrdersHistoryComponent implements OnInit {

  ordersList:Order[]

  constructor(private orderListService:OrdersListService) { }

  ngOnInit(): void {

    this.orderListService.getMergedOrdersList().subscribe(ordersListFound => {

      this.ordersList = ordersListFound

      })
  }
}
