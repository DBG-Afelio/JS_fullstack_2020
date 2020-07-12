import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/orderService/order.service';
import { Order } from 'src/app/models/orderModel/order';
import { UserService } from 'src/app/services/userService/user.service';
import { User } from 'src/app/models/userModel/user';
import { FullOrder } from 'src/app/models/fullOrderModel/fullOrder';

@Component({
  selector: 'app-validate-page',
  templateUrl: './validate-page.component.html',
  styleUrls: ['./validate-page.component.css']
})
export class ValidatePageComponent implements OnInit {


  public fullOrder: FullOrder = null;
  public currentUser: User = null;
  public creditMax: number = null;

  public isCreditEnough: boolean = false;

  constructor(
    private orderService: OrderService,
    private userService:UserService,
  ) {
    
    this.userService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
      this.loadOrderData();
      
      
    });
  }

  ngOnInit(): void {
  }
  public loadOrderData(): void{
  
    this.orderService.getFullOrder().subscribe((full) => {
      this.fullOrder = full;
      this.creditMax = this.orderService.getCreditMax();
      this.fullOrder ? this.isCreditEnough = this.fullOrder.getTotalPrice() + this.currentUser.credit <= Number(this.creditMax) : this.isCreditEnough = null;
    });
}
  public confirmOrder(isPayed:boolean): void{
    console.log('$$$ commande confirmee, status PAYED = ', isPayed);
    this.fullOrder.getOrder().isPayed = isPayed;
    this.orderService.addOrderIntoServer(this.fullOrder);
    console.log('commande ajoutee dans JSON');
    
    this.loadOrderData();
    
    if (!isPayed) {
      console.log('credit AVANT maj => ', this.currentUser.credit);
      this.currentUser.credit += this.fullOrder.getTotalPrice();
      console.log('credit APRES maj => ', this.currentUser.credit);
      this.userService.updateUser(this.currentUser).subscribe(() => {
        this.userService.getCurrentUser().subscribe((user) => console.log('user credit updated : ',user));
      });
    }
  }
}
