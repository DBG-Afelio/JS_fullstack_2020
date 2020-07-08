import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  @Input() ordersList:Order[]

  constructor() { }

  ngOnInit(): void {
  }

}
