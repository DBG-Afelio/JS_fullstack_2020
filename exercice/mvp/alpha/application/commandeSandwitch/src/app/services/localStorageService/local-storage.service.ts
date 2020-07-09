import { Injectable } from '@angular/core';
import { Order } from 'src/app/models/orderModel/order';
import { User } from 'src/app/models/userModel/user';
import { UserService } from '../userService/user.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public currentUser: User = null;
  public savedOrderLocally: Order = null;
  constructor(private userService: UserService) { 
    this.userService.getCurrentUser().subscribe((currUser) => {
      this.currentUser = currUser;
      this.savedOrderLocally = this.checkForOrder();
    });
  }

  public storeOrder(order: Order): void {
    localStorage.setItem(order.userId.toString(), JSON.stringify(order));
  }

  public checkForOrder(): Order | null {
    let order: Order = null;
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        if (key === this.currentUser.id.toString()) {
          order = JSON.parse(localStorage.getItem(key));
        }
      }
    }
    return order;
  }

  public emptyAll(): void{
    localStorage.clear();
  }


}
