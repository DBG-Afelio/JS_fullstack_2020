import { Component, OnInit } from '@angular/core';
import { FullOrder } from 'src/app/models/fullOrderModel/fullOrder';
import { OrderService } from 'src/app/services/orderService/order.service';
import { Supplier } from 'src/app/models/supplierModel/Supplier';
@Component({
  selector: 'app-history-admin-page',
  templateUrl: './history-admin-page.component.html',
  styleUrls: ['./history-admin-page.component.css']
})
export class HistoryAdminPageComponent implements OnInit {

  public allOrders: FullOrder[] = [];
  public mySupplier: Supplier = null;
  
  public page: number;
  public pageSize: number;
  public collectionSize: number;

  constructor(
    private orderService: OrderService,
  ) {
    this.orderService.getAllFullOrders().subscribe((fullHistory) => {
      this.allOrders = fullHistory;
      this.collectionSize = fullHistory.length;
    });
    this.page = 1;
    this.pageSize = 10;
  }

  ngOnInit(): void {
  }

  public sortBy(prop: string){
    return this.allOrders?.sort((a, b) => a[prop] > b[prop] ? -1 : a[prop] === b[prop] ? 0 : 1);
  }
  
}
