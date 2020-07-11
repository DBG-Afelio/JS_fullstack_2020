import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/productModel/Product';
import { ProductService } from 'src/app/services/productService/product.service';
import { SupplierService } from 'src/app/services/supplierService/supplier.service';
import { ActivatedRoute } from '@angular/router';
import { Supplier } from 'src/app/models/supplierModel/Supplier';

@Component({
  selector: 'app-product-admin-page',
  templateUrl: './product-admin-page.component.html',
  styleUrls: ['./product-admin-page.component.css']
})
export class ProductAdminPageComponent implements OnInit {

  public supplierId: number;
  public supplierName: string;
  public listProducts: Product[];

  constructor(
    public productService: ProductService,
    public supplierService: SupplierService,
    public activatedRoute: ActivatedRoute
    ) {   
    this.activatedRoute.paramMap.subscribe(params => {
      let id = Number(params.get('id'));
      this.supplierService.getSupplierWithProductsById(id).subscribe(supplier => {
        this.supplierId = supplier.id; 
        this.supplierName = supplier.name;
        this.listProducts = supplier.getListProducts();
      })
    });
    this.reloadProductList();
  }

  public reloadProductList(): void{
    this.productService.getProductsFromSupplier(this.supplierId).subscribe((listProducts) => this.listProducts = listProducts);
  }

  public removeProduct(product: Product) {
    if (confirm('Etes-vous sur de vouloir supprimer ce produit ?')) {
      this.productService.removeProduct(product).subscribe(() => {
        this.productService.navigateToProductAdmin(this.supplierId);
      });
      this.reloadProductList();
    }
  }
  
  ngOnInit(): void {
  }
}
