import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/app/models/order';
import { User } from 'src/app/models/user';
import { OrdersListService } from 'src/app/services/orders-list.service';
import { MatDialog } from '@angular/material/dialog';
import { OrderProductComponent } from 'src/app/view/order-product/order-product.component';
import { UsersListService } from 'src/app/services/users-list.service';


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



  constructor(private ordersListService:OrdersListService,
              private orderDialog: MatDialog,
              private usersListService:UsersListService) { }

  ngOnInit(): void {
    

  }

  onCancelOrderButtonClick(orderToCancel:Order){

    this.cancelOrder.emit(orderToCancel);

  }
  onOrderNameClick(orderClicked:Order){

    const newOrder = new Order(this.currentUser.id,orderClicked.productId,orderClicked.optionsId,false,0,new Date())
    newOrder.setUser(this.currentUser);
    newOrder
    this.usersListService.setCurrentUserOrder(newOrder);
    console.log(orderClicked);
    this.openOrderDialog(orderClicked);

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

  openOrderDialog(newOrder:Order){

    const dialogRef = this.orderDialog.open(OrderProductComponent,{
      data: {
        order: newOrder
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog result:", result);

      if(result === 'order'){

        this.ordersListService.addOrder(newOrder).subscribe(_ => console.log('order ok'))

      }else if(result === 'update'){

        this.ordersListService.getUserOrders(newOrder.userId).subscribe(userOrdersFound => {

          const dailyOrders = userOrdersFound.filter(order => this.getFormatedDate(order.date) === this.getFormatedDate(new Date()));

          newOrder.id = dailyOrders[dailyOrders.length-1].id
          this.ordersListService.updateOrder(newOrder).subscribe(_ => console.log('updatedOrder',_))

        });

      }

    });

  }

}
