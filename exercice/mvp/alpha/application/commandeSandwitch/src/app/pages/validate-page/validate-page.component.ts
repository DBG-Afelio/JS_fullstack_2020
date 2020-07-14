import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/orderService/order.service';
import { Order } from 'src/app/models/orderModel/order';
import { UserService } from 'src/app/services/userService/user.service';
import { User } from 'src/app/models/userModel/user';
import { FullOrder } from 'src/app/models/fullOrderModel/fullOrder';
import { Deadline } from 'src/app/models/deadlineModel/deadline';

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
  public isOnTime: boolean = null;
  constructor(
    private orderService: OrderService,
    private userService:UserService,
  ) {
    this.userService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
      this.loadOrderData();
    });
    this.orderService.isOnTime().subscribe((timingStatus) => this.isOnTime = timingStatus);
  }

  ngOnInit(): void {
  }
  public loadOrderData(): void {
    this.orderService.getFullOrder().subscribe((full) => {
      this.fullOrder = full;
      this.creditMax = this.orderService.getCreditMax();
      this.fullOrder ? this.isCreditEnough = this.fullOrder.getTotalPrice() + this.currentUser.credit <= Number(this.creditMax) : this.isCreditEnough = null;
    });
}
  public confirmOrder(isPayed: boolean): void{
    if (this.isOnTime) {
      this.fullOrder.getOrder().isPayed = isPayed;
      this.orderService.addOrderIntoServer(this.fullOrder);

      if (!isPayed) {
        this.currentUser.credit += this.fullOrder.getTotalPrice();
        this.userService.updateUser(this.currentUser).subscribe();
      }
    } else {
      window.alert('Le temps limite est depasse. Nous sommes desoles de ne pouvoir prendre en compte votre demande.');
    }
  }

}
