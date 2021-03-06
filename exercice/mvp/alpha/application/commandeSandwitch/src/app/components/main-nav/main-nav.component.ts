import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/userModel/user';
import { UserService } from 'src/app/services/userService/user.service';
import { OrderService } from 'src/app/services/orderService/order.service';
import { FullOrder } from 'src/app/models/fullOrderModel/fullOrder';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit, OnDestroy {
  fullOrderSubscription: Subscription;
  public isOnTime: boolean = null;
  public currentUser: User = null;
  public fullOrder: FullOrder = null;
  public userList: User[] = [];
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

  ngOnDestroy(){
    this.fullOrderSubscription.unsubscribe;
  }

  public loadData(): void{
    this.userService.isChangeInUserList().subscribe(() => {
      this.userService.getList().subscribe((list) => this.userList = list);
    });
    this.fullOrderSubscription = this.orderService.getFullOrder().subscribe((full) => {
      this.fullOrder = full;
      console.log('fullOrder MAIN-NAV :', full);
    });
    this.userService.getCurrentUser().subscribe((user) => this.currentUser = user);
    this.orderService.isOnTime().subscribe((timingStatus) => this.isOnTime = timingStatus);
  }

  public updateCurrentUser(user: User): void {
    this.userService.setCurrentUser(user);
  }

  public deleteOrder(): void{

    if (this.orderService.isOnTime()) {
      this.fullOrder.isConfirmed() ? this.orderService.deleteOrderFromServer(this.fullOrder) : this.orderService.removeFromLocalStorage();
    } else {
      window.alert('Le temps limite est depasse. Nous sommes desoles de ne pouvoir prendre en compte votre demande.');
    }
  }

}
