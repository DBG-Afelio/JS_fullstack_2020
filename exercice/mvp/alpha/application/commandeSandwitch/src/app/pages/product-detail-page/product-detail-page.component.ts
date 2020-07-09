import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/supplierModel/Supplier';
import { SupplierService } from 'src/app/services/supplierService/supplier.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/productService/product.service';
import { Product } from 'src/app/models/productModel/Product';
import { User } from 'src/app/models/userModel/user';
import { UserService } from 'src/app/services/userService/user.service';
import { LocalStorageService } from 'src/app/services/localStorageService/local-storage.service';
import { Order } from 'src/app/models/orderModel/order';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {

  public listSuppliers: Supplier[];
  public product: Product;
  public currentUser: User = null;
  public updatedPrice: number = 0;
  public optionsSelected: number[]=[];
  constructor(
    public supplierService: SupplierService,
    public productService: ProductService, 
    public activatedRoute: ActivatedRoute,
    private userService: UserService,
    private localStorage: LocalStorageService,
  ) { 
    this.activatedRoute.paramMap.subscribe(params => {
      let id = Number(params.get('id'));
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
        this.updatedPrice = this.product.price;
      })
    });
    
    this.supplierService.getList().subscribe((list) => {
      this.listSuppliers = list;
    });

    this.userService.getCurrentUser().subscribe((user) => this.currentUser = user); 
  }

  ngOnInit(): void {
  }

  public updateEndPrice(isOptionAdded: boolean, optionPrice: number, optionId:number): number{
    console.log('UPDATE PRICE', isOptionAdded, optionPrice);
    if (isOptionAdded) {
      this.updatedPrice += optionPrice;
      this.optionsSelected.push(optionId);
    } else {
      this.updatedPrice -= optionPrice;
      const index: number = this.optionsSelected.findIndex(id => id === optionId);
      this.optionsSelected.splice(index, 1);
    }
    return this.updatedPrice;
  }

  public saveOrderLocally(): void{
    let newOrder = new Order(
      this.currentUser.id,
      this.product.id,
      this.optionsSelected,
      false,
      0,
      new Date (Date.now())
    )
    this.localStorage.storeOrder(newOrder);
    console.log(`commande ${newOrder} saved in LocalStorage`);
  }
}
