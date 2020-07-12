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
  public fullOrder: FullOrder = null;
  constructor(
    public supplierService: SupplierService,
    public productService: ProductService, 
    public activatedRoute: ActivatedRoute,
    private userService: UserService,
    private orderService: OrderService,
    private router:Router,
  ) { 
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
    this.orderService.getFullOrder().subscribe((full) => {
      this.fullOrder = full;
      console.log('+++++++detail>>>>,', full);
    });
    console.log('----coucou from detail-page------');
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
  // public updateOptionStatus(option: Option): boolean {
  //   let status: boolean = false;
  //   if (this.fullOrder && this.fullOrder.getProduct().id === this.product.id) {
  //     status = this.fullOrder.getSelectedOptions().some(optionSelected => optionSelected.id === option.id);
  //     console.log('option :', option.nom, status);
  //     status ? this.updateEndPrice(status, option.surcout, option.id):status;
  //   }
  //   return status;
  // }

  public saveInLocalStorage(): void {
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
  }

  private createNewOrder(): FullOrder{
    let newFullOrder: FullOrder = new FullOrder(
      this.currentUser,
      new Order(this.currentUser.id, this.product.id, this.optionsSelected, false, 0, new Date()),
      this.product,
      false
    )
    return newFullOrder;
  }

  
  public remove(): void{
    console.log('--------delete from DETAIL => com. confirmed? ', this.fullOrder.isConfirmed(), 'commande # :',this.fullOrder.getOrder().id);
    if (this.product.id === this.fullOrder.getOrder().productId) {
      if (!this.fullOrder.isConfirmed()) {
        this.orderService.removeFromLocalStorage();
        console.log('commande supprimee du Local storage');
      } else {
        const msg = `Etes-vous certain de vouloir annuler votre commande ?`;
        if (window.confirm(msg)) {
          console.log('commande annulee', this.fullOrder.getOrder().id);
          this.orderService.deleteOrderFromServer(this.fullOrder.getOrder());
        }
      }
    }
  }


}