import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/services/supplierService/supplier.service';
import { Supplier } from 'src/app/models/supplierModel/Supplier';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  listSuppliers: Supplier[] = [];

  constructor(
    public supplierService: SupplierService
  ) { 
    this.supplierService.getList().subscribe((list) => {
      this.listSuppliers = list;
      console.log(list);
    });
  }

  ngOnInit(): void {
  }
}
