import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import{ Order } from 'src/app/interfaces/order';
import { LoginService } from 'src/app/services/login.service';
<<<<<<< HEAD
import { Router } from '@angular/router';

=======
>>>>>>> origin/bravo-sanwichster

@Component({
  selector: 'app-list-total-orders',
  templateUrl: './list-total-orders.component.html',
  styleUrls: ['./list-total-orders.component.css']
})
export class ListTotalOrdersComponent implements OnInit {

  public todayOrders: Order[] = [];

  constructor(private orderService: OrdersService, private loginservice: LoginService, private route: Router) {
    this.orderService.getUsersAndProductsNameInListOrders().subscribe((receivedOrders) => {
      this.todayOrders = receivedOrders;

   })

   console.log(this.loginservice.currentUser);

    if (!this.loginservice.getCurrentUser() || !this.loginservice.getCurrentUser().admin) {
      this.route.navigate(['/']);
    } 
  }

  ngOnInit() {
    this.getOrders();

  }

  getOrders(){
    return this.todayOrders;
  }
  getTotalPriceForOneDay(){
    return this.todayOrders.reduce((total, oneOrder) => total + oneOrder.getTotalPrice(),0)
  }

}

