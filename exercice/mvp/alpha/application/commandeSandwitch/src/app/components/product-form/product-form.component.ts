import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/productModel/Product';
import { ProductService } from 'src/app/services/productService/product.service';
import { Option } from 'src/app/models/optionModel/Option';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() product: Product;
  @Output() create = new EventEmitter<Product>();
  @Output() update = new EventEmitter<Product>();
  @Output() deleteOption = new EventEmitter<Product>();

  constructor(private productService: ProductService) { }

  public createProduct() {
    this.create.emit(this.product);
  }

  public saveChanges(form) {
    console.log('form: ' ,form);
    this.update.emit(this.product);
  }

  public createOption() {
    this.product.options.push(this.createNewOption());
  }

  public createNewOption() {
    let options = this.product.options;
    let index = 1;
    options.forEach(option => { 
      if (option.id === index) {
        index++;
      }
    });
    return new Option(index, '', 0);
  }

  public deleteOptionEvent(option: Option) {
    let tabOptions = this.product.getOptions().filter(opt => opt.id !== option.id);
    this.product.options = tabOptions;
  }

  public navigateToAdmin() {
    this.productService.navigateToProductAdmin(this.product.getSupplierId());
  }

  ngOnInit(): void {
  }

}
