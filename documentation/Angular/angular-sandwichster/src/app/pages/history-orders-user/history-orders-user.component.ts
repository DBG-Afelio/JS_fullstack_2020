import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/interfaces/order';
import { UserModel } from 'src/app/interfaces/user.model';
import { UserService } from 'src/app/services/user.service';
import { ListTotalOrdersComponent } from 'src/app/pages/list-total-orders/list-total-orders.component';


@Component({
  selector: 'app-history-orders-user',
  templateUrl: './history-orders-user.component.html',
  styleUrls: ['./history-orders-user.component.css']
})
export class HistoryOrdersUserComponent implements OnInit {

  public idUser: number;
  public currentUser: Order;
  public totalOrders: ListTotalOrdersComponent; 
  public allUserOrders: Order[] = [];

  constructor (
    private activatedRoute: ActivatedRoute,
    private userservice: UserService,
    private router: Router 
  ) {

    this.activatedRoute.paramMap.subscribe((data) => {
       this.idUser = Number(data.get('id'));

      if(this.idUser === 0) {

        this.currentUser = new Order(
            0,
            0,
            [],
            false,
            0,
            ""
      )

    } else {
    
    console.log(this.allUserOrders)
     this.allUserOrders =  this.totalOrders[this.idUser];
      
    }

    })

  }

  // Tentative de recup la liste de toutes les commandes filtrées par l'ID du client

  getOrdersByUserID (idUser: number) {
    return this.totalOrders.getOrders()[idUser]
  }

  ngOnInit() {
   
  }

}
