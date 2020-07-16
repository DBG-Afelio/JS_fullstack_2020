import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/interfaces/order';
import { UserService } from 'src/app/services/user.service';
import { OrdersService } from 'src/app/services/orders.service';
import { ListTotalOrdersComponent } from '../list-total-orders/list-total-orders.component';



@Component({
  selector: 'app-history-orders-user',
  templateUrl: './history-orders-user.component.html',
  styleUrls: ['./history-orders-user.component.css']
})
export class HistoryOrdersUserComponent implements OnInit {

 idUser: number;
 currentUserName: string = "";
 allIndividualUserOrders: Order[];

 getFilteredOrders (id: number, array: Order[]) {
  return array.filter((user) => user.user_id  === id);
}

  constructor (
    private activatedRoute: ActivatedRoute,
    private orderservice: OrdersService,
    private user: UserService
  ) {

    this.activatedRoute.paramMap.subscribe((data) => {
       this.idUser = Number(data.get('id'));
    })

    this.user.getUserByID(this.idUser).subscribe((user) => this.currentUserName = user.prenom);

  }


  ngOnInit() {  

    this.orderservice.getUsersAndProductsNameInListOrders().subscribe((orders) => {
      this.allIndividualUserOrders = orders;
    });

    // this.allIndividualUserOrders = this.getFilteredOrders(this.idUser, this.allIndividualUserOrders);

    console.log(this.allIndividualUserOrders);

    console.log(this.idUser);
  }

}


  

