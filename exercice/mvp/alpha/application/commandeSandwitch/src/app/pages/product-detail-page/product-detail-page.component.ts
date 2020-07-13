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
  public optionsSelected: number[] = [];
  public fullOrder: FullOrder = null;
  constructor(
    public supplierService: SupplierService,
    public productService: ProductService, 
    public activatedRoute: ActivatedRoute,
    private userService: UserService,
    private orderService: OrderService,
    private router:Router,
  ) { 
    this.orderService.isOnTime().subscribe((timingStatus) => this.isOnTime = timingStatus);
    this.activatedRoute.paramMap.subscribe(params => {
      let id = Number(params.get('id'));
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
        this.updatedPrice = this.product.price;
      })
    });
    this.loadData();
  }

  ngOnInit(): void {
  }
  public loadData(): void{
    this.supplierService.getList().subscribe((list) => this.listSuppliers = list);
    this.userService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
    });
    this.orderService.getFullOrder().subscribe((full) => this.fullOrder = full);
  }
  
  public updateEndPrice(isOptionAdded: boolean, optionPrice: number, optionId:number): number{   
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

  public saveInLocalStorage(): void {
    if (this.isOnTime) {
      if (!this.fullOrder) { //pas encore de commande
        this.orderService.addInLocalStorage(this.createNewOrder());
      } else {
        if (this.fullOrder.isConfirmed()) { //une commande confirmee existe
          const msg2 = `Vous avez deja une commande CONFIRMEE pour aujourd'hui: ${this.fullOrder.getProduct().getName()}. Veuillez la supprimer (avant 10h30) avant de renouveler une commande`;
          if (window.confirm(msg2)) {
            this.router.navigateByUrl(`/produit/${this.fullOrder.getOrder().productId}`);
          }
        } else { //une commande en cours existe
          const msg1 = `Vous avez deja une commande temporairement SAUVEGARDEE: ${this.fullOrder.getProduct().getName()}. Voulez-vous la remplacer ?`;
          if (window.confirm(msg1)) {
            this.orderService.addInLocalStorage(this.createNewOrder());
          }
        }
      }
    } else {
      window.alert('Le temps limite est depasse. Nous sommes desoles de ne pouvoir prendre en compte votre demande.');
    }
    
  }

  private createNewOrder(): Order{
    
    return new Order(
      this.currentUser.id,
      this.product.id,
      this.optionsSelected,
      false, //isPayed
      0,  //id = 0 pour les new
      new Date()
    );
  }

  
  public remove(): void{
    if (this.isOnTime) {
      if (this.product.id === this.fullOrder.getOrder().productId) {
        if (!this.fullOrder.isConfirmed()) {
          this.orderService.removeFromLocalStorage();
        } else {
          const msg = `Etes-vous certain de vouloir annuler votre commande ?`;
          if (window.confirm(msg)) {
            this.orderService.deleteOrderFromServer(this.fullOrder.getOrder());
          }
        }
      }
    } else {
      window.alert('Le temps limite est depasse. Nous sommes desoles de ne pouvoir prendre en compte votre demande.');
    }
    
  }

}