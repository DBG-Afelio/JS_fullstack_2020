import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../interfaces/user.model';

import { UserService } from '../../services/user.service';
import { Order } from 'src/app/interfaces/order';
import { OrdersService } from '../../services/orders.service'


@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  public userDisplayed: UserModel;
  public ordersDisplayed: Order[];

  constructor(
    public userService: UserService,
    public orderService: OrdersService,
  ) {
    
    this.userService.getUserByID(4869).subscribe((userReceived) => {
      this.userDisplayed = userReceived;
    });

    this.orderService.getUsersAndProductsNameInListOrders().subscribe((listOrders) => {
      this.ordersDisplayed = listOrders.filter(element => element.user_id === 2); // à modifier quand on aura un user qui pourra se logger
      // l'id user remplacera le "2"
      console.log(this.ordersDisplayed);
    });

   }

  ngOnInit() {
  }

}
