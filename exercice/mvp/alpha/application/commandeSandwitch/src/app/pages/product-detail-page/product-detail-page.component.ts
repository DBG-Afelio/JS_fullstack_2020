import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/supplierModel/Supplier';
import { SupplierService } from 'src/app/services/supplierService/supplier.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/productService/product.service';
import { Product } from 'src/app/models/productModel/Product';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {

  public listSuppliers: Supplier[];
  public product: Product;

  constructor(
    public supplierService: SupplierService,
    public productService: ProductService, 
    public activatedRoute: ActivatedRoute,
  ) { 
    this.activatedRoute.paramMap.subscribe(params => {
      let id = Number(params.get('id'));
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
      })
    });
    
    this.supplierService.getList().subscribe((list) => {
      this.listSuppliers = list;
    });
  }

  ngOnInit(): void {
  }

}
