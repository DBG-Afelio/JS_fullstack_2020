import { Component, OnInit } from '@angular/core';
import{ ListItemsService } from '../../services/list-items.service';
import { SuppliersService } from '../../services//suppliers.service';
import { Item } from '../../interfaces/item';
import { Supplier } from '../../interfaces/supplier';
import { LoginService } from 'src/app/services/login.service';
import { Order } from 'src/app/interfaces/order';
import { OrdersService } from 'src/app/services/orders.service';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

public selectedProduct: Item;
public selectedProductPrice: number;
public selectedProductOptionsPrices: number[];
public selectedProductOptions: number[];
public selectedProductSupplier: Supplier;

  public sidebarDisplay: boolean = false;

  private listProducts: Item[] = [];
  private listSuppliers: Supplier[] = [];
 
  private isAuth: boolean = false;
  private isAdmin: boolean = false;

  constructor(
    public listItemsService: ListItemsService,
    public suppliersService: SuppliersService,
    public loginService: LoginService,
    public orderService: OrdersService
    ) { 
      this.listItemsService.getListItems().subscribe((listeRecue) => {
        this.listProducts = listeRecue;

      });

      this.suppliersService.getListSuppliers().subscribe((listeRecue) => {
        this.listSuppliers = listeRecue;

      });
    }

  ngOnInit() {
    this.getCurrentUser();

  }

  getCurrentUser(){
    if(this.loginService.currentUser){
      this.isAuth = true;
      if(this.loginService.currentUser.admin){
        this.isAdmin = true;
      }
    }
    console.log(this.loginService.getCurrentUser());
  }

  getListProducts(){
    return this.listProducts;
  }

  getListSuppliers(){
    return this.listSuppliers;
  }

  getListProductsFiltered(idSupplier: number){
    return this.listProducts.filter(element => element.fourn_id == idSupplier)
  }
  
  onProductSelection(item){
   
    this.selectedProduct = item;
    this.selectedProductOptionsPrices = [];
    this.selectedProductPrice = this.selectedProduct.prix;
    this.selectedProductOptions = [];
    this.suppliersService.getSuppliersById(this.selectedProduct.fourn_id).subscribe((element) => {
      this.selectedProductSupplier = element})
    if(this.sidebarDisplay === false){
      this.sidebarDisplay = true;
    }



  }

  createOrderEvent(order: Order){
    this.orderService.createOrder(order).subscribe();

  }

  closeSidebar(){
    this.sidebarDisplay = false;
  }

}
