import { Component } from '@angular/core';
import { UsersListService } from './services/users-list.service';
import { User } from './models/user';
import { OrdersListService } from './services/orders-list.service';
import { Order } from './models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lunchOrder';
  showFiller:boolean = false;
  currentUser:User;
  currentUserOrder:Order;

  numberOfDailyOrder:number;

  constructor(private usersListService:UsersListService,
              private ordersListService:OrdersListService,
              private router:Router){

    usersListService.getCurrentUser().subscribe( userFound => {

      this.currentUser = userFound
      

    })
   
    ordersListService.getNewOrderEvent().subscribe(_ => {
      
      ordersListService.getOrdersList().subscribe( ordersListFound => {

        this.numberOfDailyOrder = ordersListFound.filter(order => order.date.getDate() === new Date().getDate()).length;

      })
      usersListService.getCurrentUserOrder().subscribe( userOrderFound => {

        this.currentUserOrder = userOrderFound
        
  
      })

    })
    
  }

  onButtonLogoutClick(){

    if(confirm("Voulez-vous vraiment vous déconnecter?")){

      this.usersListService.logoutUser();
      this.router.navigate([""])

    }

  }

}
