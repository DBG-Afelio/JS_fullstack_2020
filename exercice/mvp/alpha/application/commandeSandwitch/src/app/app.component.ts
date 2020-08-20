import { Component } from '@angular/core';
import { UserService } from './services/userService/user.service';
import { OrderService } from './services/orderService/order.service';
import { ProductService } from './services/productService/product.service';
import { Supplier } from './models/supplierModel/Supplier';
import { User } from './models/userModel/user';
import { Order } from './models/orderModel/order';
import { Product } from './models/productModel/Product';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'L\'ASSIA\-CAST';

  public aside: boolean = true;
  public orderList: Order[] = [];
  public productList: Product[] = [];
  public userList: User[] = [];
  public currentUser: User = null;

  constructor(
    private userService: UserService,
    private orderService: OrderService,
    private productService: ProductService,
  ) {
    this.productService.getList().subscribe((list) => {
      this.productList = list;
    });
    this.userService.getList().subscribe((list) => {
      this.userList = list;
      this.currentUser = list[1];
    });
    this.orderService.getList().subscribe((list) => {
      this.orderList = list;
    });
    
  }

  public changeAside() {
    this.aside = !this.aside;
  }
}
