import { Component, OnInit, Inject } from '@angular/core';
import { OrdersListService } from 'src/app/services/orders-list.service';
import { Product } from 'src/app/models/product';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {

  order

  constructor(@Inject(MAT_DIALOG_DATA) private data,private orderListService:OrdersListService) { }

  ngOnInit(): void {

    this.order = this.data.order

  }
  

}
