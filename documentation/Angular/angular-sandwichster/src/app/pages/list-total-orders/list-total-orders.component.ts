import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import{ Order } from 'src/app/interfaces/order'

@Component({
  selector: 'app-list-total-orders',
  templateUrl: './list-total-orders.component.html',
  styleUrls: ['./list-total-orders.component.css']
})
export class ListTotalOrdersComponent implements OnInit {

  public todayOrders: Order[]; 

  constructor(private orderService: OrdersService) {
    this.orderService.getUserInListOrders().subscribe((receivedOrders) => {
      this.todayOrders = receivedOrders;
      console.log(this.todayOrders);
   })
  }

  ngOnInit() {
    this.getOrders();
  }

getOrders(){
  return this.todayOrders;
}
  

}

