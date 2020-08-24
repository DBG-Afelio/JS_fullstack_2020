import { Component, OnInit,} from '@angular/core';
import { SupplierService } from 'src/app/services/supplierService/supplier.service';
import { Supplier } from 'src/app/models/supplierModel/Supplier';
import { User } from 'src/app/models/userModel/user';
import { UserService } from 'src/app/services/userService/user.service';
import { Order } from 'src/app/models/orderModel/order';
import { OrderService } from 'src/app/services/orderService/order.service';
import { ProductService } from 'src/app/services/productService/product.service';
import { Product } from 'src/app/models/productModel/Product';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  public listSuppliers: Supplier[] = [];
  public userList: User[] = [];
  public currentUser: User = null;
  public orderList: Order[] = [];
  public productList: Product[] = [];

  constructor(
    private supplierService: SupplierService, 
    private productService: ProductService,
    private userService: UserService,
    private orderService: OrderService
  ) { 
    this.supplierService.getList().subscribe((list) => {
      this.listSuppliers = list;
      console.log('Liste des forunisseurs: ', list);
    });
    this.productService.getList().subscribe((list) => {
      this.productList = list;
    });
    this.userService.getList().subscribe((list) => {
      this.userList = list;
    });
  
    this.userService.getCurrentUser().subscribe(currUser => this.currentUser = currUser);

    this.orderService.getList().subscribe((list) => {
      //this.orderList = list;
    });
  }

  ngOnInit(): void {
  }

}
