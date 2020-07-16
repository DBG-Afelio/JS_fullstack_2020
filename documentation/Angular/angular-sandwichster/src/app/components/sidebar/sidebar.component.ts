import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { SuppliersService } from 'src/app/services/suppliers.service';
import { Supplier } from 'src/app/interfaces/supplier';
import { Order } from 'src/app/interfaces/order';
import { OrdersService } from 'src/app/services/orders.service';
import { UserModel } from 'src/app/interfaces/user.model';
import { UserDto } from 'src/app/interfaces/userDto'
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';



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

@Output() visibleSidebar = new EventEmitter<boolean>();

//public userCredit: any = this.userService.getUserByID(this.loginService.currentUser.id);
public timeLimitResponse: boolean;
public selectedOptionsSum: number = 0;
public isPaid: boolean;
public isOrderSent: boolean = false;
public sentPrice: number;
public residualDebtProjection: number;

public user: UserModel;
public userCreditUpdate: number = this.loginService.currentUser.credit;
public order: Order;

  constructor(
    public supplierService: SuppliersService,
    public orderService: OrdersService,
    public userService: UserService,
    public loginService: LoginService,
    private routeur: Router
    

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
    this.user = this.loginService.getCurrentUser();
    this.timeLimitResponse = this.orderService.getTimeLimitResponse();

    console.log('Commande actuelle avant la condition : ' + this.order);

    // ESSAI MEMORISATION COMMANDE AVEC BOOLEEN
    if(this.orderService.hasUserAlreadyOrdered === undefined || this.orderService.hasUserAlreadyOrdered === false){
      this.isOrderSent = false;
    }
    else{
      this.isOrderSent = true;
      this.order = this.orderService.todayUserOrder;
      this.sentPrice = this.orderService.receivedPrice;
      console.log('Commande actuelle après la condition : ' + this.order.id);
      
    }

    

    // QUESTION // console.log('test user avec userService, doit renvoyer user', this.userService.getUserByID(1)); // QUESTION POURQUOI CECI NE FONCTIONNE PAS ???


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

    
}


paidTrue(){ // C'EST SALE, BERK
  console.log("payé");
  this.isPaid = true;
}

paidFalse(){ // C'EST SALE, BERK
  console.log("non-payé");
  this.isPaid = false;
}

  orderGoEvent(){
    this.timeLimitResponse = this.orderService.getTimeLimitResponse();
    console.log("timeLimitResponse : " , this.timeLimitResponse);
    if(this.user.banni){
      alert('Vous avez été banni.')
    }
    else{
      if(!this.isPaid){

        if((this.selectedOptionsSum + this.user.credit)<=this.orderService.getCreditLimit()){
          this.orderGoForReal();
          this.user.credit = this.user.credit + this.selectedOptionsSum;
          this.userService.updateUser(this.user).subscribe();
        }
        else{
          this.residualDebtProjection = this.user.credit + this.selectedOptionsSum - this.orderService.getCreditLimit();
          alert("La limite de votre crédit est atteinte : veuillez payez vos dettes ! Vous avez " + this.user.credit + "€ à régler en tout. Pour pouvoir commander ce sandwich, vous devez au moins payer directement " + this.residualDebtProjection + "€."); // devrait pouvoir afficher le montant à payer
        }
      } 
  
      else{
        this.orderGoForReal();
        console.log("La commande a été envoyée");
      }
    }

  }

    orderGoForReal(){
      if(this.timeLimitResponse === false){
        alert('Trop tard enfoiré !');
      }
      else{
          
        if(this.isPaid !== undefined){
          //if()
            let newOrderDate = new Date();
      
            let newOrder = new Order(
              this.user.id, 
              this.selectedProduct.id,
              this.selectedProductOptions, 
              this.isPaid, 
              0, 
              newOrderDate.toISOString() 
            )
        
            this.isOrderSent = true;
            this.orderService.userHasAlreadyOrdered(this.isOrderSent); // ESSAI MEMO COM AVEC BOOL
            this.order = newOrder;
            this.orderService.createOrder(this.order).subscribe(order => {
              this.order = order
              this.orderService.todayUserOrder = this.order
              this.orderService.receivedPrice = this.sentPrice;
              });
            ;
            this.sentPrice = this.selectedOptionsSum;
          }
          else{
            alert('Veuillez précisez si vous avez payé ou non');
          }
        }
    }

  orderDeleteEvent(){
    console.log(this.sentPrice);
    this.orderService.deleteOrder(this.order).subscribe();
    if(!this.isPaid || this.isPaid === undefined){
      this.user.credit = this.user.credit - this.sentPrice;
    }
    this.userService.updateUser(this.user).subscribe();
    this.isOrderSent = false;
    this.orderService.userHasAlreadyOrdered(this.isOrderSent); // ESSAI MEMO COM AVEC BOOL
  
  }

  orderModifyEvent(){

    this.orderDeleteEvent();

    this.orderGoEvent();

  }

  closeSidebar(){
    console.log("click");
    this.visibleSidebar.emit(false);
  }
}