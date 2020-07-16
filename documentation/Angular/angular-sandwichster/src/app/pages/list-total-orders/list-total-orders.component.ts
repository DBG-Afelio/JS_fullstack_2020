import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import{ Order } from 'src/app/interfaces/order';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-total-orders',
  templateUrl: './list-total-orders.component.html',
  styleUrls: ['./list-total-orders.component.css']
})
export class ListTotalOrdersComponent implements OnInit {

  public todayOrders: Order[] = [];
  public todaySelectedOrders: Order[] = [];
  public currentDate: string = this.orderService.dayOfToday;
  public todayDisplay: boolean = true;

  public currentDateRegEx: RegExp = new RegExp(this.currentDate);

  constructor(
    private orderService: OrdersService, 
    private loginservice: LoginService, 
    private route: Router
    ) 
    {
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

  getFilteredOrders (date: string, array: Order[]) {
    return array.filter((order) => order.date  === date);
  }

  displayTodayOrders(onlyToday){
    let orders: Order[];
    if(onlyToday){
      orders = this.todayOrders.filter(order => this.currentDateRegEx.test(order.date))
    }
    else {
      orders = this.todayOrders;
    }
    return orders;
  }

  getOrders(){
    return this.todayOrders;
  }
  
  getTotalPriceForOneDay(list){
    return list.reduce((total, oneOrder) => total + oneOrder.getTotalPrice(),0)
  }

  displaySwitch(){
    this.todayDisplay = !this.todayDisplay;
  }

}

