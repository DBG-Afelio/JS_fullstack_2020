import { Component } from '@angular/core';
import { UsersListService } from './services/users-list.service';
import { User } from './models/user';
import { OrdersListService } from './services/orders-list.service';
import { Order } from './models/order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lunchOrder';
  showFiller:boolean = false;
  currentUser:User;
  currentUserOrder:Order;

  numberOfDailyOrder:number;

  constructor(private usersListService:UsersListService,
              private ordersListService:OrdersListService,){

    usersListService.getCurrentUser().subscribe( userFound => {

      this.currentUser = userFound
      

    })
    ordersListService.getOrdersList().subscribe( ordersListFound => {

      this.numberOfDailyOrder = ordersListFound.filter(order => order.date.getDate() === new Date().getDate()).length

    })
  }

}
