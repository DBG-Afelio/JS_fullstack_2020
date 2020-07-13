import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { SuppliersService } from 'src/app/services/suppliers.service';
import { Supplier } from 'src/app/interfaces/supplier';
import { Order } from 'src/app/interfaces/order';
import { OrdersService } from 'src/app/services/orders.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

@Input() selectedProduct: Item;
@Input() selectedProductPrice: number;
@Input() selectedProductSupplier: Supplier;
@Output() newOrderOutput = new EventEmitter<Order>();

public selectedOptions: number[] = [];
public selectedOptionsPrices: number[] = [];
public selectedOptionsSum: number = 0;
public isPaid: boolean;

  constructor(
    public supplierService: SuppliersService,
    public orderService: OrdersService

  ) { }

  ngOnInit() {
    console.log("");
    this.selectedOptions = [];
    this.selectedOptionsPrices = [];

  }

  optionSelection(option, i){

    if(this.selectedOptions.includes(option.id)){
      this.selectedOptions = this.selectedOptions.filter(optionID => option.id != optionID)
      console.log(option.id);
    }
    else{
      this.selectedOptions.push(option.id);
        console.log(option.id);

    }
    console.log('INDEX OPTION DERNIER CLIC : ' + i )
    console.log(this.selectedOptions);
    //console.log(this.selectedOptionsPrices)
    //console.log(this.selectedOptionsSum)
}

isPaidSelection(value){
  console.log(value);
}

  orderGoEvent(){
    
    let newOrderDate = new Date();

    let newOrder = new Order(
      1, // à connecter avec le user service
      this.selectedProduct.id,
      this.selectedOptions, 
      this.isPaid, // PAS OUBLIER AJOUTER VERIFICATION CHECKED
      0, // doit rester 0 jusqu'à arriver dans le service order où un id unique est généré  ?
      newOrderDate.toISOString() // transformer la nouvelle date en string (new Date().toString)
    )

    this.newOrderOutput.emit(newOrder); // ne sert à rien pour l'instant

    this.orderService.createOrder(newOrder);

    console.log(newOrderDate);


  }

}


