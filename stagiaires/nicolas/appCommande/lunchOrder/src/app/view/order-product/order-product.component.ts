import { Component, OnInit } from '@angular/core';
import { OrdersListService } from 'src/app/services/orders-list.service';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {

  constructor(private orderListService:OrdersListService) { }

  ngOnInit(): void {
  }

}
