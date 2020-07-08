import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/supplierModel/Supplier';
import { SupplierService } from 'src/app/services/supplierService/supplier.service';

@Component({
  selector: 'app-supplier-admin-page',
  templateUrl: './supplier-admin-page.component.html',
  styleUrls: ['./supplier-admin-page.component.css']
})
export class SupplierAdminPageComponent implements OnInit {

  public listSuppliers: Supplier[];

  constructor(public supplierService: SupplierService) { 
    this.supplierService.getList().subscribe((list) => {
      this.listSuppliers = list;
    });
  }

  ngOnInit(): void {
  }

}
