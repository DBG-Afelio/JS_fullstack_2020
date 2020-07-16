import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/interfaces/order';
import { UserService } from 'src/app/services/user.service';
import { OrdersService } from 'src/app/services/orders.service';
import { UserModel } from 'src/app/interfaces/user.model';

@Component({
  selector: 'app-history-orders-user',
  templateUrl: './history-orders-user.component.html',
  styleUrls: ['./history-orders-user.component.css']
})
export class HistoryOrdersUserComponent implements OnInit {

 idUser: number;
 allIndividualUserOrders: Order[];
 currentUser: UserModel;

 getFilteredOrders (id: number, array: Order[]) {
  return array.filter((order) => order.user_id  === id);
}

  constructor (
    private activatedRoute: ActivatedRoute,
    private orderservice: OrdersService,
    private user: UserService
  ) {

    this.activatedRoute.paramMap.subscribe((data) => {
       this.idUser = Number(data.get('id'));
       this.user.getUserByID(this.idUser).subscribe((user) => this.currentUser = user);
    })

  }


  ngOnInit() {  

    this.orderservice.getUsersAndProductsNameInListOrders().subscribe((listOrders) => {
      this.allIndividualUserOrders = this.getFilteredOrders(this.idUser, listOrders);
      console.log(this.allIndividualUserOrders);
    });

    console.log(this.allIndividualUserOrders);
    console.log(this.idUser);
  }

}


  

