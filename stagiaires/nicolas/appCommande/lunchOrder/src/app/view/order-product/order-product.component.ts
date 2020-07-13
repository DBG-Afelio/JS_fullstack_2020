import { Component, OnInit, Inject } from '@angular/core';
import { OrdersListService } from 'src/app/services/orders-list.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {

  order:Order


  constructor(public dialogRef: MatDialogRef<OrderProductComponent>, @Inject(MAT_DIALOG_DATA)
              public data,
              private orderListService:OrdersListService) { }

  ngOnInit(): void {

    this.order = this.data.order

  }
  onButtonClick(button:string){

    this.orderListService.getUserOrders(this.order.userId).subscribe(userOrdersFound => {

      const dailyOrders = userOrdersFound.filter(order => order.date.getDay() === new Date().getDay())

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
  

}
