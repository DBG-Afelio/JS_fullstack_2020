import { Component, OnInit } from '@angular/core';
import { FullOrder } from 'src/app/models/fullOrderModel/fullOrder';
import { OrderService } from 'src/app/services/orderService/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-history-page',
  templateUrl: './admin-history-page.component.html',
  styleUrls: ['./admin-history-page.component.css']
})
export class AdminHistoryPageComponent implements OnInit {
  
  public ordersHistory: FullOrder[] = [];

  constructor(
    private orderService: OrderService,
  ) {
    
    this.orderService.getAllFullOrders().subscribe((fullHistory) => {
      this.ordersHistory = fullHistory;
    });
   
   }

  ngOnInit(): void {
  }

}
