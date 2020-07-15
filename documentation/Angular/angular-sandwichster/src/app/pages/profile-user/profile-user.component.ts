import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../interfaces/user.model';

import { UserService } from '../../services/user.service';
import { Order } from 'src/app/interfaces/order';
import { OrdersService } from '../../services/orders.service'
import { LoginService } from 'src/app/services/login.service';
import { Item } from 'src/app/interfaces/item';
import { Supplier } from 'src/app/interfaces/supplier';
import { SuppliersService } from '../../services//suppliers.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  public userDisplayed: UserModel;
  public ordersDisplayed: Order[];

  public sidebarDisplay: boolean = false;

  private isAuth: boolean = false;
  private isAdmin: boolean = false;

  public selectedProduct: Item;
  public selectedProductPrice: number;
  public selectedProductOptionsPrices: number[];
  public selectedProductOptions: number[];
  public selectedProductSupplier: Supplier;

  constructor(
    public userService: UserService,
    public orderService: OrdersService,
    public loginService: LoginService,
    public suppliersService: SuppliersService
  ) {
    
    this.userDisplayed = this.loginService.getCurrentUser();
    console.log(this.loginService.getCurrentUser());

    this.orderService.getUsersAndProductsNameInListOrders().subscribe((listOrders) => {
      this.ordersDisplayed = listOrders.filter(element => element.user_id === this.userDisplayed.id);
      console.log(this.ordersDisplayed);
    });

   }

  ngOnInit() {

  }

  getCurrentUser(){
    if(this.loginService.currentUser){
      this.isAuth = true;
      if(this.loginService.currentUser.admin){
        this.isAdmin = true;
      }
    }
  }

  orderAgain(order){

    console.log(order.item.options.map(a => a.id));

    this.selectedProduct = order.item;
    this.selectedProduct.nom = order.item.nom;
    this.selectedProduct.description = order.item.description;
    this.selectedProduct.prix = order.item.prix;
    this.selectedProductOptionsPrices = [];
    this.selectedProductPrice = order.item.prix;
    this.selectedProductOptions = [];
    this.selectedProductSupplier = order.item.fourn_id;

    if(this.sidebarDisplay === false){
      this.sidebarDisplay = true;
    }



    /*
    console.log(order);
    order.id = 0;
    alert("Vous avez recommandé un " + order.item.nom)
    this.orderService.createOrder(order).subscribe();
    */
  }

  createOrderEvent($event){
    console.log("Prêt à transmettre");
  }

}
