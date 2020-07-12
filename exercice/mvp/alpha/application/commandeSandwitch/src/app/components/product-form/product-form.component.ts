import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/productModel/Product';
import { ProductService } from 'src/app/services/productService/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() product: Product;
  @Output() create = new EventEmitter<Product>();
  @Output() update = new EventEmitter<Product>();


  constructor(private productService: ProductService) { }

  public createProduct() {
    this.create.emit(this.product);
  }

  public saveChanges() {
    this.update.emit(this.product);
  }

  public createOption() {
    alert('ajouter une option');
  }


  public navigateToAdmin() {
    this.productService.navigateToProductAdmin(this.product.getSupplierId());
  }

  ngOnInit(): void {
  }

}
