import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../interfaces/user.model';

import { UserService } from '../../services/user.service';
import { Order } from 'src/app/interfaces/order';
import { OrdersService } from '../../services/orders.service'
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  public userDisplayed: UserModel;
  public ordersDisplayed: Order[];

  private isAuth: boolean = false;
  private isAdmin: boolean = false;

  constructor(
    public userService: UserService,
    public orderService: OrdersService,
    public loginService: LoginService,
  ) {
    
    this.userDisplayed = this.loginService.getCurrentUser();
    console.log(this.loginService.getCurrentUser());

    this.orderService.getUsersAndProductsNameInListOrders().subscribe((listOrders) => {
      this.ordersDisplayed = listOrders.filter(element => element.user_id === this.userDisplayed.id);
      console.log(this.ordersDisplayed);
    });

   }

  ngOnInit() {

  }

  getCurrentUser(){
    if(this.loginService.currentUser){
      this.isAuth = true;
      if(this.loginService.currentUser.admin){
        this.isAdmin = true;
      }
    }
  }

  orderAgain(order){
    console.log(order);
    order.id = 0;
    alert("Vous avez recommandé un " + order.item.nom)
    this.orderService.createOrder(order).subscribe();

  }

}
