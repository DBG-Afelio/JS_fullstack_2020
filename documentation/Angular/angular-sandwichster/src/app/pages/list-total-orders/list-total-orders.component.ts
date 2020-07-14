import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import{ Order } from 'src/app/interfaces/order';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-list-total-orders',
  templateUrl: './list-total-orders.component.html',
  styleUrls: ['./list-total-orders.component.css']
})
export class ListTotalOrdersComponent implements OnInit {

  public todayOrders: Order[] = [];

  constructor(private orderService: OrdersService, private loginService: LoginService) {
    this.orderService.getUsersAndProductsNameInListOrders().subscribe((receivedOrders) => {
      this.todayOrders = receivedOrders;

   })
  }

  ngOnInit() {
    this.getOrders();

  }

  getOrders(){
    return this.todayOrders;
  }
  getTotalPriceForOneDay(){
    return this.todayOrders.reduce((total, oneOrder) => total + oneOrder.getTotalPrice(),0)
  }

}

