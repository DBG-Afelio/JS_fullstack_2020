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
  // public orderList: Order[] = [];
  // public productList: Product[] = [];
  public creditMaxAllowed: number = null;
  constructor(
    private userService: UserService,
    private orderService: OrderService,
  ) { 
    this.loadData();
  }

  ngOnInit(): void {
    this.creditMaxAllowed = this.orderService.getCreditMax();
  }

  public loadData(): void{
    this.userService.getList().subscribe((list) => this.userList = list);
    this.userService.getCurrentUser().subscribe((user) => this.currentUser = user);
    this.orderService.getFullOrder().subscribe((full) => {
      this.fullOrder = full;
      console.log('---MAIN-NAV CHANGED FullORDER ===>>> ', full?.getOrder().id, full?.isConfirmed());
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
    console.log('--------delete from MAIN => com. confirmed? ', this.fullOrder.isConfirmed(), 'commande # :',this.fullOrder.getOrder().id);
    if (this.fullOrder.isConfirmed()) {
      this.orderService.deleteOrderFromServer(this.fullOrder.getOrder());
      console.log('commande supprimee du server suite a request from USER-NAV');
    } else {
      this.orderService.removeFromLocalStorage();
      console.log('commande supprimee du LocalStorage suite a request from USER-NAV');
    }
   // this.loadData();
  }
  
}
