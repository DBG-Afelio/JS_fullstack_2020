import { Component, OnInit, Input,  Output, EventEmitter  } from '@angular/core';
import { User } from 'src/app/models/userModel/user';
import { Authentication } from 'src/app/models/userModel/authentication.enum';
import { Order } from 'src/app/models/orderModel/order';
import { Product } from 'src/app/models/productModel/Product';

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
  public creditMax: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  public setAuthStatus(): Authentication {
    return this.currentUser ? this.authentication = Authentication.LOGOUT : Authentication.LOGIN;
  }

  public getCurrentOrder(): Order | undefined {
    //or from localstorage
    return this.orderList.find((order) => order.userId === this.currentUser.id);
  }

  public isOrderConfirmed(): boolean {
    return false; //from localstorage or db
  }

  public setCreditMessage(): string {
    let message: string = '';
    switch (this.currentUser.credit) {
      case 0: {
        message = `Il vous reste la totalite de votre credit autorise d'un montant de € ${this.creditMax}`;
        break;
      }
      case 10: {
        message = `Vous avez epuise la totalite de votre credit authorise ! Veuillez vous acquitter du montant du aupres de l'administrateur`;
        break;
      }
      default: {
        message = `Vous avez consommé € ${this.currentUser.credit} sur votre credit autorise. Veuillez vous acquitter du montant du aupres de l'administrateur`;
      }
    }
    return message;
  }

  public setPanierMessage(): string {
    let msg: string = '';
    if (this.currentUser)
    return 
  }
  public setOrderMessage(): string {
    return 'here comes info about current order';
  }
}
