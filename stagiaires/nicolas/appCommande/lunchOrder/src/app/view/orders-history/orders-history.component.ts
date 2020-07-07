import { Component, OnInit } from '@angular/core';
import { OrdersListService } from 'src/app/services/orders-list.service';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.css']
})
export class OrdersHistoryComponent implements OnInit {

  constructor(private orderListService:OrdersListService) { }

  ngOnInit(): void {
  }

}
