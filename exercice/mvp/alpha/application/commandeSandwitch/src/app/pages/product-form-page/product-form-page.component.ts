import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/productModel/Product';
import { ProductService } from 'src/app/services/productService/product.service';

@Component({
  selector: 'app-product-form-page',
  templateUrl: './product-form-page.component.html',
  styleUrls: ['./product-form-page.component.css']
})
export class ProductFormPageComponent implements OnInit {
  public supplierId: number;
  public productId: number;  
  public product: Product; 

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.activatedRoute.paramMap.subscribe((params) => {
      this.productId = Number(params.get('id'));
      if (this.productId !== 0 ) {
        this.productService.getProductById(this.productId).subscribe((product: Product) => {
          this.product = product;
        });
      } else {
        this.supplierId =  Number(params.get('supplierid'));
        this.productId = 0;
        this.product = new Product( 0, '', '', 0, [], this.supplierId) ;
      }
    }); 
  }

  public createProduct(product: Product) {
    this.productService.createProduct(product).subscribe(() => {
      this.productService.navigateToProductAdmin(product.getSupplierId());
    });
  }

  public updateProduct(product: Product) {
    this.productService.updateProduct(product).subscribe(() => {
      this.productService.navigateToProductAdmin(product.getSupplierId());
    });
  }

  ngOnInit(): void {
  }
}
