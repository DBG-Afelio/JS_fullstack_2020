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

  public confirmedOrder: Order = null;
  public savedOrder: Order = null;
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
      this.orderService.getLocalOrder().subscribe((localOrder) => this.savedOrder = localOrder);
      this.orderService.getServerOrder().subscribe((serverOrder) => this.confirmedOrder = serverOrder);
      this.orderService.getUserOrderAsFullOrder().subscribe((full) => {
        this.fullOrder = full;
        this.creditMax = this.orderService.getCreditMax();
        this.isCreditEnough = this.fullOrder.getTotalPrice() + user.credit <= Number(this.creditMax);
        console.log(this.isCreditEnough, this.creditMax, user.credit, this.fullOrder.getTotalPrice());
      });
      
      
    });
  }

  ngOnInit(): void {
  }


  public confirmOrder(isPayed:boolean): void{
    console.log('commande confirmee, status PAYED = ', isPayed);
  }
}
