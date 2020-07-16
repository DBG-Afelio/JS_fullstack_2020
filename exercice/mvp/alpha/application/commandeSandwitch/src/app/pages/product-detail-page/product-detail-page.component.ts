import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/supplierModel/Supplier';
import { SupplierService } from 'src/app/services/supplierService/supplier.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/productService/product.service';
import { Product } from 'src/app/models/productModel/Product';
import { User } from 'src/app/models/userModel/user';
import { UserService } from 'src/app/services/userService/user.service';
import { Order } from 'src/app/models/orderModel/order';
import { OrderService } from 'src/app/services/orderService/order.service';
import { FullOrder } from 'src/app/models/fullOrderModel/fullOrder';
import { Option } from 'src/app/models/optionModel/Option';
import { Deadline } from 'src/app/models/deadlineModel/deadline';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {
  public isOnTime: boolean = null;
  public listSuppliers: Supplier[];
  public product: Product;
  public currentUser: User = null;
  public updatedPrice: number = 0;
  // public optionsSelected: number[] = []; //a supprimer plutard
  public selectedOptionsHere: Option[] = [];
  public fullOrder: FullOrder = null;
  public isEqualToUserOrder: boolean = false;
  public selected: number[] = [];
  public deadline: Deadline = null;
  public productSupplier: Supplier = null;
//-------------WARNING : CODE ARCHI SALE ---- SORRY

  constructor(
    public supplierService: SupplierService,
    public productService: ProductService,
    public activatedRoute: ActivatedRoute,
    private userService: UserService,
    private orderService: OrderService,
    private router: Router,
  ) {
    this.loadData();
  }

  ngOnInit(): void {
  }

  public loadData(): void {
    this.orderService.getDeadline().subscribe((deadline) => this.deadline = deadline);
    this.userService.getCurrentUser().subscribe((user) => this.currentUser = user);
    this.activatedRoute.paramMap.subscribe(params => {
      let id = Number(params.get('id'));
      this.orderService.getFullOrder().subscribe((full) => {
        this.fullOrder = full;
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
        this.supplierService.getProductAndSupplier(product.id).subscribe(([prod, supplier]) => this.productSupplier = supplier);
        // this.product ? this.updateFinalPrice() : this.product;
        
          if (!this.fullOrder || this.fullOrder.getProduct().id !== product.id) { 
            this.selectedOptionsHere = this.selected = [];
            this.updatedPrice = product.price;
          //  this.updateFinalPrice();
          } else {
            this.selectedOptionsHere = this.fullOrder.getSelectedOptions();
            this.selected = this.selectedOptionsHere.map((option) => option.id);
            this.updateFinalPrice();
          }
        });
      });
    });
    this.orderService.isOnTime().subscribe((timingStatus) => this.isOnTime = timingStatus);
    this.supplierService.getList().subscribe((list) => this.listSuppliers = list);
    
  }


  public updateFinalPrice(): void {
    this.updatedPrice = this.product.price;
    this.selectedOptionsHere.forEach((option) => this.updatedPrice += option.surcout);
  }

  public optionChangeRequest(changedOption: Option, optionState: boolean): void {
    if (optionState) {
      this.selectedOptionsHere.push(changedOption);
    } else {
      const index: number = this.selectedOptionsHere.findIndex((option) => option.id === changedOption.id);
      this.selectedOptionsHere.splice(index, 1);
    }
    this.updateFinalPrice();
  }

  public setOptionState(optionDisplayed: Option): boolean {
    let isChecked: boolean = false;
    if (this.fullOrder && this.fullOrder.getSelectedOptions().length > 0) {
      this.fullOrder.getSelectedOptions().find((option) => option.id === optionDisplayed.id) ?
        isChecked = true : isChecked = false;
    }
    this.optionChangeRequest(optionDisplayed, isChecked);
    this.updateFinalPrice();
    return isChecked;
  }


  public saveInLocalStorage(): void {
    if (this.isOnTime) {
      this.orderService.addInLocalStorage(this.createNewOrder());
    }
  }

  private createNewOrder(): Order{
    return new Order(
      this.currentUser.id,
      this.product.id,
      this.getOptionIds(this.selectedOptionsHere),
      false, //isPayed
      0,  //id = 0 pour les new
      new Date()
    );
  }

  public getOptionIds(optionArr: Option[]): number[]{
    let optionIds: number[] = [];
    optionArr.forEach((optionObj) => optionIds.push(optionObj.getId()));
    return optionIds;
  }
  
  public remove(): void{
    if (this.isOnTime) {
      if (!this.fullOrder.isConfirmed()) {
        this.orderService.removeFromLocalStorage();
      } else {
        const msg = `Etes-vous certain de vouloir annuler votre commande ?`;
        if (window.confirm(msg)) {
          this.orderService.deleteOrderFromServer(this.fullOrder);
        }
      }
    } 
  }

}