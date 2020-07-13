import { Component, OnInit } from '@angular/core';
import{ ListItemsService } from '../../services/list-items.service';
import { SuppliersService } from '../../services//suppliers.service';
import { Item } from '../../interfaces/item';
import { Supplier } from '../../interfaces/supplier';
import { LoginService } from 'src/app/services/login.service';
import { Order } from 'src/app/interfaces/order';
import { OrdersService } from 'src/app/services/orders.service';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

public selectedProduct: Item;
public selectedProductPrice: number;
public selectedProductSupplier: Supplier;

  public sidebarDisplay: boolean = false;

  private listProducts: Item[];
  private listSuppliers: Supplier[];
 
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
  
  testEvent2(item){
   
    this.selectedProduct = item;
    this.selectedProductPrice = this.selectedProduct.prix;
    this.suppliersService.getSuppliersById(this.selectedProduct.fourn_id).subscribe((element) => {console.log(
      this.selectedProductSupplier = element)})
    if(this.sidebarDisplay === false){
      this.sidebarDisplay = true;
    }
  }

  createOrderEvent(order: Order){
    this.orderService.createOrder(order).subscribe();

  }

}
