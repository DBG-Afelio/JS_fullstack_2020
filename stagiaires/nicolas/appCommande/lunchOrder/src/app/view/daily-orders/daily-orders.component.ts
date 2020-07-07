import { Component, OnInit } from '@angular/core';
import { OrdersListService } from 'src/app/services/orders-list.service';

@Component({
  selector: 'app-daily-orders',
  templateUrl: './daily-orders.component.html',
  styleUrls: ['./daily-orders.component.css']
})
export class DailyOrdersComponent implements OnInit {

  constructor(private orderListService:OrdersListService) { }

  ngOnInit(): void {
  }

}
