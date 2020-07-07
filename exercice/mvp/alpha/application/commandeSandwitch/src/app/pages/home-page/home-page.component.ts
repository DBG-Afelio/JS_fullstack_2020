import { Component, OnInit,} from '@angular/core';
import { SupplierService } from 'src/app/services/supplier.service';
import { Supplier } from 'src/app/models/Supplier';
import { User } from 'src/app/models/userModel/user';
import { UserService } from 'src/app/services/userService/user.service';
import { Order } from 'src/app/models/orderModel/order';
import { OrderService } from 'src/app/services/orderService/order.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  listSuppliers: Supplier[] = [];
  public userList: User[] = [];
  public currentUser: User = null;
  public orderList: Order[] = [];
  public productList: Product[] = [];

  constructor(
    public supplierService: SupplierService, //il est preferable de les mettre en private
    private productService: ProductService,
    private userService: UserService,
    private orderService: OrderService
  ) { 
    this.supplierService.getList().subscribe((list) => {
      this.listSuppliers = list;
    });
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

  ngOnInit(): void {
  }

  updateCurrentUser(user: User): void {
    this.currentUser = user;
  }
}
