import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
import { OrderService } from 'src/app/services/orderService/order.service';
import { User } from 'src/app/models/userModel/user';
import { FullOrder } from 'src/app/models/fullOrderModel/fullOrder';
import { Option } from 'src/app/models/optionModel/Option';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/orderModel/order';
import { Deadline } from 'src/app/models/deadlineModel/deadline';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  public currentUser: User = null;
  public ordersHistory: FullOrder[] = [];
  public currentOrder: FullOrder = null;
  public isOnTime: boolean = null;
  public deadline: Deadline = null;
  public deadline_str: string = '';

  constructor(
    private userService: UserService,
    private orderService: OrderService,
    private router: Router,
  ) { 
    this.orderService.getDeadline().subscribe((limit) => {
      this.deadline = limit;
      this.deadline_str = '';
    })
    this.orderService.isOnTime().subscribe((timingStatus) => this.isOnTime = timingStatus);
    this.userService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
      if (user) {
        this.orderService.getAllFullOrders().subscribe((fullHistory) => {
          this.ordersHistory = fullHistory.filter(fullOrder => fullOrder.getOrder().userId === user.id);
        });
        this.orderService.getFullOrder().subscribe((anyFullOrder) => this.currentOrder = anyFullOrder);
      }
    });
  }

  ngOnInit(): void {
  }
  public goToProduct(productId: number, selectOptions: number[]): void { //amelioration : cette methode a integrer au service/ redondante dans product-detail aussi
    if (this.isOnTime) { //il est tjr temps pour commander
      const newOrder: Order = new Order(this.currentUser.id, productId, selectOptions, false, 0, new Date());
      if (!this.currentOrder) {
        this.orderService.addInLocalStorage(newOrder);
        this.router.navigateByUrl(`/produit/${productId}`);
      } else { //j'ai deja une commande existante(confirmed ou non)
        if (this.currentOrder.isConfirmed()) { //il ya deja une commande (paye/credit) confirmed
          const msg2 = `Vous avez deja une commande CONFIRMEE pour aujourd'hui: ${this.currentOrder.getProduct().getName()}. Veuillez la supprimer (avant 10h30) avant de renouveler une commande`;
          if (window.confirm(msg2)) {
            this.router.navigateByUrl(`/produit/${this.currentOrder.getOrder().productId}`);
          }
        } else { //une commande en cours existe mais pas encore confirmed
          const msg1 = `Vous avez deja une commande temporairement SAUVEGARDEE: ${this.currentOrder.getProduct().getName()}. Voulez-vous la remplacer ?`;
          if (window.confirm(msg1)) {
            this.orderService.addInLocalStorage(newOrder);
            this.router.navigateByUrl(`/produit/${productId}`);
          } 
        }
      }
    } else { //temps depassed
      window.alert('Le temps limite est depasse. Nous sommes desoles de ne pouvoir prendre en compte votre demande.');
    }
  }

  public optionsToString(selectedOptions: Option[]): string{ //a integrer aussi dans order service
    let optionsStr: string = '';
    if (selectedOptions.length > 0) {
      selectedOptions.forEach(option => optionsStr += `${option.nom} `);
    } else {
      optionsStr = '-';
    }
    return optionsStr;
  }



}
