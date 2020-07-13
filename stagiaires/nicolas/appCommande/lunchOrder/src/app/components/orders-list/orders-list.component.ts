import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/app/models/order';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  @Input() ordersList:Order[];

  @Input() currentUser:User;

  @Output() cancelOrder:EventEmitter<Order> = new EventEmitter();
  @Output() orderNameClick:EventEmitter<Order> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {


  }

  onCancelOrderButtonClick(orderToCancel:Order){

    this.cancelOrder.emit(orderToCancel);

  }
  onOrderNameClick(orderClicked:Order){



  }

}
