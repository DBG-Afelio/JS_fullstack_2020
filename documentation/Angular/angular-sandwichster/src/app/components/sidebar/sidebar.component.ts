import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { SuppliersService } from 'src/app/services/suppliers.service';
import { Supplier } from 'src/app/interfaces/supplier';
import { Order } from 'src/app/interfaces/order';
import { OrdersService } from 'src/app/services/orders.service';
import { UserModel } from 'src/app/interfaces/user.model';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

@Input() selectedProduct: Item;
@Input() selectedProductPrice: number;
@Input() selectedProductOptionsPrices: number[];
@Input() selectedProductOptions: number[];
@Input() selectedProductSupplier: Supplier;
@Output() newOrderOutput = new EventEmitter<Order>();


public selectedOptionsSum: number = 0;
public isPaid: boolean;

public user: UserModel;

  constructor(
    public supplierService: SuppliersService,
    public orderService: OrdersService,
    public userService: UserService

  ) {   }

  ngOnInit() {
    console.log('test du basic price : ' + this.selectedProductPrice)
  }




  //this.selectedProductOptionsPrices = this.selectedProductOptionsPrices.filter(optionSurcout => option.surcout != optionSurcout);

  optionSelection(option, i){

    if(this.selectedProductOptions.includes(option.id)){
      this.selectedProductOptions = this.selectedProductOptions.filter(optionID => option.id != optionID);
      this.selectedProductPrice = this.selectedProductPrice - option.surcout;
    }
    
    else{
      this.selectedProductOptions.push(option.id);
      this.selectedProductOptionsPrices.push(option.surcout);
      this.selectedProductPrice = this.selectedProductPrice + option.surcout;
    }

    this.selectedProductPrice = Math.round(this.selectedProductPrice * 10) / 10;
    //console.log('INDEX OPTION DERNIER CLIC : ' + i )
    //console.log(this.selectedOptionsPrices)
    //console.log(this.selectedOptionsSum)
    console.log(this.isPaid);
}

isPaidSelection(value){
  console.log(value);
}

  orderGoEvent(){
    
    if(this.isPaid !== undefined){

      let newOrderDate = new Date();

      let newOrder = new Order(
        1, // à connecter avec le user service
        this.selectedProduct.id,
        this.selectedProductOptions, 
        this.isPaid, 
        0, // doit rester 0 jusqu'à arriver dans le service order où un id unique est généré  ?
        newOrderDate.toISOString() 
      )
  
      this.newOrderOutput.emit(newOrder); 

      console.log('Time : ' + this.orderService.getTime());  


    }
    else{
      alert('Veuillez précisez si vous avez payé ou non');
    }

  }

}


