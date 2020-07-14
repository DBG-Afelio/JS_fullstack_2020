import { Component } from '@angular/core';
import { OrdersService } from './services/orders.service';
import { Order } from './interfaces/order';
import { LoginService } from './services/login.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrayOrders: Order[] = [];

  constructor(private orderservice: OrdersService, private loginService: LoginService) {
    this.orderservice.getUsersAndProductsNameInListOrders().subscribe((data) => this.arrayOrders = data);
  }
  
  title = 'angular-sandwichster';
}
