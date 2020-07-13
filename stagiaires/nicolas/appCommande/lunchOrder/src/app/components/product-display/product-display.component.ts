import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { Product } from 'src/app/models/product';
import { Order } from 'src/app/models/order';
import { OrderOption } from 'src/app/models/order-option';
import { OrdersListService } from 'src/app/services/orders-list.service';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  @Input() product:Product
  @Input() currentUser:User;
  @Input() currentTime:Date;

  @Output() productDeleted: EventEmitter<Product> = new EventEmitter()
  @Output() productOrdered: EventEmitter<Order> = new EventEmitter()

  newOrder:Order;

  options:number[]=[];


  constructor(private ordersListService:OrdersListService) { }

  ngOnInit(): void {

    this.newOrder = new Order(this.currentUser?this.currentUser.id:0,this.product.id,[],false,0,new Date());

  }

  onDeleteProductClick(){

    this.productDeleted.emit(this.product)

  }
  onOrderButtonClick(){

    this.newOrder.optionsId = this.options;
    
    this.newOrder.setUser(this.currentUser);
    this.newOrder.setProduct(this.product);
    this.newOrder.setOptions(this.newOrder.getSelectedOptions());
    this.newOrder.setTotalPrice();

    this.productOrdered.emit(this.newOrder)

  }
  addRemoveOption(option:OrderOption){

    if(this.options.includes(option.id)){

      this.options = this.options.filter(optionId => optionId != option.id )

    }else{

      this.options.push(option.id)

    }
  }
  isOrderAvailable(){

    const currentHour = this.currentTime.getHours() + this.currentTime.getMinutes()/60

    if(this.currentUser){

      if(currentHour < this.ordersListService.maxOrderHour && currentHour > this.ordersListService.minOrderHour){

        return false

      }else return true

    }else{

      return true

    }
  }

}
