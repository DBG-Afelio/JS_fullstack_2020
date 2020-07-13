import { Component } from '@angular/core';
import { OrdersService } from './services/orders.service';
import { Order } from './interfaces/order';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrayOrders: Order[] = [];

  constructor(private orderservice: OrdersService) {
    this.orderservice.getUsersAndProductsNameInListOrders().subscribe((data) => this.arrayOrders = data);
  }
  
  title = 'angular-sandwichster';
}
