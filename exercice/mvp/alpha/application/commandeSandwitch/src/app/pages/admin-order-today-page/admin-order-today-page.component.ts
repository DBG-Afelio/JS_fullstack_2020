import { Component, OnInit } from '@angular/core';
import { FullOrder } from 'src/app/models/fullOrderModel/fullOrder';
import { OrderService } from 'src/app/services/orderService/order.service';

@Component({
  selector: 'app-admin-order-today-page',
  templateUrl: './admin-order-today-page.component.html',
  styleUrls: ['./admin-order-today-page.component.css']
})
export class AdminOrderTodayPageComponent implements OnInit {
  public todayOrders: FullOrder[] = [];
  public total: number = 0;
  public credit: number = 0;

  public page: number;
  public pageSize: number;
  public collectionSize: number;

  constructor(
    private orderService: OrderService,
  ) { 
    this.orderService.getAllFullOrders().subscribe((fullHistory) => {
      this.todayOrders = fullHistory.filter((order) => {
        const orderDate = order.getOrder().date.getDate();
        const orderMonth = order.getOrder().date.getMonth();
        const orderYear = order.getOrder().date.getFullYear();
        const thisDay = new Date().getDate();
        const thisMonth = new Date().getMonth();
        const thisYear = new Date().getFullYear();
        if (orderDate === thisDay && orderMonth === thisMonth && orderYear === thisYear) {
          return order;
        }
      });
      console.log('today orders : ', this.todayOrders);
      this.collectionSize = this.todayOrders.length;
      this.total = this.todayOrders.map(order => order.getTotalPrice()).reduce((curr, acc) => curr + acc, 0);
      this.credit = this.todayOrders.filter((order) => order.getOrder().isPayed === false).map((orderNotPayed) => orderNotPayed.getTotalPrice()).reduce((curr, acc) => curr + acc, 0);
      console.log('prix tot : ', this.total);
      console.log('credidit : ', this.credit);
    });
    this.page = 1;
    this.pageSize = 10;
  }

  ngOnInit(): void {
  }


}
