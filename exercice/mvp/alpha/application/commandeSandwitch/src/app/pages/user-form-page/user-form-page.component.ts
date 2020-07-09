import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/userModel/user';
import { UserService } from 'src/app/services/userService/user.service';
import { Order } from 'src/app/models/orderModel/order';
import { Product } from 'src/app/models/productModel/Product';

@Component({
  selector: 'app-user-form-page',
  templateUrl: './user-form-page.component.html',
  styleUrls: ['./user-form-page.component.css']
})
export class UserFormPageComponent implements OnInit {

  @Input() user: User = null;
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
    });
  }

  ngOnInit(): void {
  }

  

}
