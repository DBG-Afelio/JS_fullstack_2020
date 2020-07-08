import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/userModel/user';
import { UserService } from 'src/app/services/userService/user.service';
import { Order } from 'src/app/models/orderModel/order';
import { Product } from 'src/app/models/productModel/Product';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  public currentUser: User = null;
  public userList: User[] = [];
  public orderList: Order[] = [];
  public productList: Product[] = [];
  constructor(private userService: UserService) { 
    this.userService.getList().subscribe((list) => {
      this.userList = list;

    });
    this.userService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
      console.log('current user (from constructor):', this.currentUser?.firstName);
    });
  }

  ngOnInit(): void {
  }

  public updateCurrentUser(user: User): void {
    this.userService.setCurrentUser(user);
    if (user) {
      console.log('user changed to : ', user.firstName)
    } else {
      console.log('user changed to : ', user);
    }
  }


}
