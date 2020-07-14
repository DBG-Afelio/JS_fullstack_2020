import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/app/models/order';
import { User } from 'src/app/models/user';
import { OrdersListService } from 'src/app/services/orders-list.service';

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



  constructor(private ordersListService:OrdersListService) { }

  ngOnInit(): void {
    

  }

  onCancelOrderButtonClick(orderToCancel:Order){

    this.cancelOrder.emit(orderToCancel);

  }
  onOrderNameClick(orderClicked:Order){



  }
  onPayOrderButtonCLick(orderToPay:Order){

    let payOrderConfirm = confirm(`confirmer le payement de ${orderToPay.totalPrice} € de la part de ${orderToPay.user.surname} ${orderToPay.user.name} ?`);

    if(payOrderConfirm){

      orderToPay.isPaid = true;
      this.ordersListService.updateOrder(orderToPay).subscribe()


    }

  }
  isNotOutdated(date:Date){
    
    return (this.getFormatedDate(date) === this.getFormatedDate(new Date())) && (date.getHours() < this.ordersListService.maxOrderHour)

  }
  getFormatedDate(date:Date):number{

    return Date.parse(new Date(date.getFullYear(),date.getDay(),date.getMonth()).toString())

  }

}
