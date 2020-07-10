import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/supplierModel/Supplier';
import { SupplierService } from 'src/app/services/supplierService/supplier.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/productService/product.service';
import { Product } from 'src/app/models/productModel/Product';
import { User } from 'src/app/models/userModel/user';
import { UserService } from 'src/app/services/userService/user.service';
import { Order } from 'src/app/models/orderModel/order';
import { OrderService } from 'src/app/services/orderService/order.service';
import { FullOrder } from 'src/app/models/fullOrderModel/fullOrder';

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
  public optionsSelected: number[] = [];
  public savedOrder: Order = null;
  public confirmedOrder: Order = null;
  public fullOrder: FullOrder = null;
  constructor(
    public supplierService: SupplierService,
    public productService: ProductService, 
    public activatedRoute: ActivatedRoute,
    private userService: UserService,
    private orderService: OrderService,
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
    this.userService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
      this.orderService.getLocalOrder().subscribe((localOrder) => {
        this.savedOrder = localOrder;
        console.log('ORDER LOCAL: ', localOrder);
      });
      this.orderService.getServerOrder().subscribe((serverOrder) => {
        this.confirmedOrder = serverOrder;
        console.log('ORDER SERVER: ', serverOrder);
      });
      this.orderService.getUserOrderAsFullOrder().subscribe((full) => {
        this.fullOrder = full;
        console.log('FULL ORDER: ', full);
      });
    });
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

  public saveInLocalStorage(): void{
    if (this.savedOrder) {
      const replaceOrderMsg = 'Vous avez deja une commande sauvegardee. Voulez-vous la remplacer ';
      if (window.confirm(replaceOrderMsg)) {
        this.createNewOrder();
      } else {
        // on fait rien et on maintient la precedente sauvegarde
      }
    } else { //pas de precedente sauvegarde, on sauve direct
      this.createNewOrder();
    }
  }

  private createNewOrder(): void{
    
    const newOrder = new Order(
      this.currentUser.id,
      this.product.id,
      this.optionsSelected,
      false,
      0,
      new Date(Date.now())
    );
   // this.orderService.setUserOrderAsFullOrder(newOrder); fait dans le service en princ
    this.orderService.storeOrderInLocalStorage(newOrder);

    console.log(`produit id: ${newOrder.productId} saved in LocalStorage for user ${this.currentUser.firstName}`);
  }

  public goToPaiementRequested(order:Order): void{
    
  }
}