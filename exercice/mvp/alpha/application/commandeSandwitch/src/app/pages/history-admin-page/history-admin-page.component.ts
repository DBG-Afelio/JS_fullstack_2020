import { Component, OnInit } from '@angular/core';
import { FullOrder } from 'src/app/models/fullOrderModel/fullOrder';
import { OrderService } from 'src/app/services/orderService/order.service';
import { SupplierService } from 'src/app/services/supplierService/supplier.service';
import { Supplier } from 'src/app/models/supplierModel/Supplier';
import { NgModule, LOCALE_ID } from '@angular/core';
@Component({
  selector: 'app-history-admin-page',
  templateUrl: './history-admin-page.component.html',
  styleUrls: ['./history-admin-page.component.css']
})
export class HistoryAdminPageComponent implements OnInit {

  public allOrders: FullOrder[] = [];
  public mySupplier: Supplier = null;
  
  constructor(
    private orderService: OrderService,
    private supplierService: SupplierService
  ) {
    this.orderService.getAllFullOrders().subscribe((fullHistory) => this.allOrders = fullHistory);
  }

  ngOnInit(): void {
  }

  
}
