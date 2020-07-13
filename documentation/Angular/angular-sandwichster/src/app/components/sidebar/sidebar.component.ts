import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListTotalOrdersComponent } from 'src/app/pages/list-total-orders/list-total-orders.component';
import { Order } from 'src/app/interfaces/order';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html', 
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() sidebarOrders: Order[];

  // @Output() divSideBar = new EventEmitter<?????>()

  constructor() { }



  ngOnInit() {

  }

}
