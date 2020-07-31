import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/services/supplierService/supplier.service';
import { ActivatedRoute } from '@angular/router';
import { Supplier } from 'src/app/models/supplierModel/Supplier';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  public supplier: Supplier;
  public listSuppliers: Supplier[];

  constructor(public supplierService: SupplierService, public activatedRoute: ActivatedRoute) { 
    this.activatedRoute.paramMap.subscribe(params => {
      let id = Number(params.get('id'));
      console.log("Id", id);
      this.supplierService.getSupplierWithProductsById(id).subscribe(supplier => {
        this.supplier = supplier;
        
      } )
    });
    this.supplierService.getList().subscribe((list) => {
      this.listSuppliers = list;
    });
  }

  ngOnInit(): void {
  }

}
