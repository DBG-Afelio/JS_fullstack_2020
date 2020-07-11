import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/userModel/user';
import { UserService } from 'src/app/services/userService/user.service';
import { Order } from 'src/app/models/orderModel/order';
import { Product } from 'src/app/models/productModel/Product';
import { OrderService } from 'src/app/services/orderService/order.service';
import { FullOrder } from 'src/app/models/fullOrderModel/fullOrder';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  public currentUser: User = null;
  public fullOrder: FullOrder = null;
  public userList: User[] = [];
  public orderList: Order[] = [];
  public productList: Product[] = [];
  public creditMaxAllowed: number = null;
  constructor(
    private userService: UserService,
    private orderService: OrderService,
  ) { 
    this.loadData();
    this.creditMaxAllowed = this.orderService.getCreditMax();
  }

  ngOnInit(): void {
  }

  public loadData(): void{
    this.userService.getList().subscribe((list) => {
      this.userList = list;
      this.userService.getCurrentUser().subscribe((user) => this.currentUser = user);
      this.orderService.getFullOrder().subscribe((fullOrder) => this.fullOrder = fullOrder);
    });
  }
  public updateCurrentUser(user: User): void {
    this.userService.setCurrentUser(user);
    if (user) {
      console.log('user changed to : ', user.firstName)
    } else {
      console.log('user changed to : ', user);
    }
  }

  public deleteOrder(): void{
    if (this.fullOrder.getConfirmedStatus()) {
      this.orderService.deleteOrder(this.fullOrder.getOrder()).subscribe();
      console.log('commande supprimee du server suite a request from USER-NAV');
    } else {
      this.orderService.removeTodayLocalOrder();
      console.log('commande supprimee du LocalStorage suite a request from USER-NAV');
    }
    this.loadData();
  }
  
}
