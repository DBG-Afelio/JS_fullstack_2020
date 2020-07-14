import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
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
export class SidebarComponent implements OnInit, OnChanges {

@Input() selectedProduct: Item;
@Input() selectedProductPrice: number;
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
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.selectedProduct){
      this.getTotal();
      console.log(changes, this.selectedProductPrice);
    }
    console.log('OnChange : ' , changes)
  }

  ngOnInit() {
    this.getTotal();
    console.log('test du basic price : ' + this.selectedProductPrice)
  }


  //this.selectedProductOptionsPrices = this.selectedProductOptionsPrices.filter(optionSurcout => option.surcout != optionSurcout);

getTotal(){
  this.selectedOptionsSum = this.selectedProductPrice;
  this.selectedProductOptions.forEach(optionID => 
    this.selectedOptionsSum += this.selectedProduct
    .options
    .find(option => option.id = optionID)
    .surcout)
    this.selectedOptionsSum = Math.round(this.selectedOptionsSum * 10) / 10;
}

  optionSelection(option, i){

    
    if(this.selectedProductOptions.includes(option.id)){
      this.selectedProductOptions = this.selectedProductOptions.filter(optionID => option.id != optionID);

    }
    
    else{
      this.selectedProductOptions.push(option.id);
    }

    this.getTotal();

    console.log('prix du produit avec options : ' + this.selectedProductPrice)
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


