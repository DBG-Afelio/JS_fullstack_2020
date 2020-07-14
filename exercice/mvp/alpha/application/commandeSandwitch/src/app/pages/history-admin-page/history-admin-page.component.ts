import { Component, OnInit } from '@angular/core';
import { FullOrder } from 'src/app/models/fullOrderModel/fullOrder';
import { OrderService } from 'src/app/services/orderService/order.service';
import { SupplierService } from 'src/app/services/supplierService/supplier.service';
import { Supplier } from 'src/app/models/supplierModel/Supplier';

@Component({
  selector: 'app-history-admin-page',
  templateUrl: './history-admin-page.component.html',
  styleUrls: ['./history-admin-page.component.css']
})
export class HistoryAdminPageComponent implements OnInit {

  public allOrders: FullOrder[] = [];
  public supplierList: Supplier[] = [];
  
  constructor(
    private orderService: OrderService,
    private supplierService: SupplierService
  ) {
    this.orderService.getAllFullOrders().subscribe((fullHistory) => this.allOrders = fullHistory);
    this.supplierService.getList().subscribe((supplierList) => this.supplierList = supplierList);
  }

  ngOnInit(): void {
  }

  public getSupplier(productId: number): Supplier{
    let mySupplier: Supplier = null;
    this.supplierList.map(eachSupplier => {
      this.supplierService.getSupplierWithProductsById(eachSupplier.getId())
        .subscribe((thatSupplierWithProd) => {
          thatSupplierWithProd.getListProducts().find(product => product.getId() === productId) ? mySupplier = thatSupplierWithProd : mySupplier;
        });
    });
    console.log('mySupplier : ',mySupplier);
    return mySupplier;
  }

  public displaySupplier(prodId:number):Supplier{
    // faire d'abord methode dans service pour recuperer un supplier depuis un product Id
    let supplier: Supplier = null;
    return supplier;
  }
}
