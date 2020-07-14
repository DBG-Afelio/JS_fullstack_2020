import { Component } from '@angular/core';
import { OrdersService } from './services/orders.service';
import { Order } from './interfaces/order';
import { LoginService } from './services/login.service';
import { UserModel } from './interfaces/user.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrayOrders: Order[] = [];
  currentUser: UserModel;

  constructor(private orderservice: OrdersService, private login : LoginService) {
    this.orderservice.getUsersAndProductsNameInListOrders().subscribe((data) => this.arrayOrders = data);
    this.login.getCurrentUserAsObservable().subscribe((user) => this.currentUser = user);
  }

  disconnect() {
    this.login.signOut();
  }
  
  title = 'angular-sandwichster';
}
