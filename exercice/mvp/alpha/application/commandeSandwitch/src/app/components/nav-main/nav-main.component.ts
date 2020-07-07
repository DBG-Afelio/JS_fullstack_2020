import { Component, OnInit, Input,  Output, EventEmitter  } from '@angular/core';
import { User } from 'src/app/models/userModel/user';
import { Authentication } from 'src/app/models/userModel/authentication.enum';
import { Order } from 'src/app/models/orderModel/order';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.css']
})
export class NavMainComponent implements OnInit {
  @Input() userList: User[] = [];
  @Input() currentUser: User = null;
  @Input() orderList: Order[] = [];
  @Input() productList: Product[] = [];
  @Output() changedUser: EventEmitter<User> = new EventEmitter;
  public authentication: Authentication;

  constructor() { }

  ngOnInit(): void {
  }

  public setAuthStatus(): Authentication {
    return this.currentUser ? this.authentication = Authentication.LOGOUT : Authentication.LOGIN;
  }

  public getCurrentOrder(): string  {
    let productName:string = 'Pas de commande en cours'
    this.orderList.find((order) => {
      if (order.userId === this.currentUser.id) {
        const product = this.productList.find((prod) => prod.id === order.productId);
        productName = product.name;
      }
    });
    return productName;
  }


}
