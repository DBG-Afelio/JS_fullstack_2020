import { Component, OnInit, Inject } from '@angular/core';
import { OrdersListService } from 'src/app/services/orders-list.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Order } from 'src/app/models/order';
import { UsersListService } from 'src/app/services/users-list.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {

  order:Order;
  currentUser: User;


  constructor(public dialogRef: MatDialogRef<OrderProductComponent>, @Inject(MAT_DIALOG_DATA)
              public data,
              private orderListService:OrdersListService,
              private userListService: UsersListService) { }

  ngOnInit(): void {

    this.order = this.data.order;
    this.userListService.getCurrentUser().subscribe(userFound => this.currentUser=userFound)

  }
  onButtonClick(button:string){

    this.orderListService.getUserOrders(this.order.userId).subscribe(userOrdersFound => {

      const dailyOrders = userOrdersFound.filter(order => this.getFormatedDate(order.date) === this.getFormatedDate(new Date()))

      if(dailyOrders.length > 0){

        let modifyOrderConfirm = confirm("Vous avez déja passé commande aujourd'hui, souhaitez vous la remplacer par votre commande actuelle ?")

        if(modifyOrderConfirm){

          this.dialogRef.close('update');
          
        }

      }else{

        this.dialogRef.close('order');

      }

    })

  }
  getFormatedDate(date:Date):number{
    return Date.parse(date.toLocaleString().split(',')[0])

  }

}
