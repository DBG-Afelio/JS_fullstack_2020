import { Component, OnInit } from '@angular/core';
import { OrdersListService } from 'src/app/services/orders-list.service';
import { Order } from 'src/app/models/order';
import { User } from 'src/app/models/user';
import { UsersListService } from 'src/app/services/users-list.service';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.css']
})
export class OrdersHistoryComponent implements OnInit {

  ordersList:Order[]
  currentUser:User
  constructor(private orderListService:OrdersListService,private usersListService:UsersListService,) { }

  ngOnInit(): void {

    this.loadComponent()
   
  }

  loadComponent(){

    this.usersListService.getCurrentUser().subscribe(currentUserFound => {

      if(currentUserFound){

        this.currentUser = currentUserFound;

          this.orderListService.getMergedOrdersList().subscribe(ordersListFound =>{
            if(this.currentUser.isAdmin){

            this.ordersList = ordersListFound

            }else {

              this.ordersList = ordersListFound.filter(order => order.userId === this.currentUser.id)

            }

          })

      }
    })

  }

  onCancelOrder(orderToCancel:Order){

    let cancelConfirm = confirm('Annuler la commande ?');

    if(cancelConfirm){

      this.orderListService.removeOrder(orderToCancel.id).subscribe()
      this.loadComponent()

    }

  }
  
}
