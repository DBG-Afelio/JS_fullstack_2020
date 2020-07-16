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
import { ListItemsService } from 'src/app/services/list-items.service';


// PIERRE - THOMAS
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
public allOrders: Order[];

public user: UserModel;
public userCreditUpdate: number = this.loginService.currentUser.credit;
public order: Order;

public previousOrderedItem: Item;

public currentDate: string = this.orderService.dayOfToday;

public currentDateRegEx: RegExp = new RegExp(this.currentDate);

  constructor(
    public supplierService: SuppliersService,
    public orderService: OrdersService,
    public userService: UserService,
    public loginService: LoginService,
    private routeur: Router,
    public listItemService: ListItemsService
    

  ) {   }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.selectedProduct){
      this.getTotal();
      //console.log(changes, this.selectedProductPrice);
    }
    //console.log('OnChange : ' , changes)
  }

  ngOnInit() {
    //console.log(this.currentDate);
    console.log(this.isOrderSent);
    this.getTotal();
    this.user = this.loginService.getCurrentUser();
    //console.log(this.user)
    this.timeLimitResponse = this.orderService.getTimeLimitResponse();
    
    this.orderedTodayTest();
    
    


/*
    //console.log('La date du jour, telle que définie dans order.service est : ', this.orderService.getDateFunc());
    //console.log("xxx", this.allOrders);

    ///////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ A SUPPRIMER ///////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    // ESSAI MEMORISATION COMMANDE AVEC BOOLEEN
    if(this.orderService.hasUserAlreadyOrdered === undefined || this.orderService.hasUserAlreadyOrdered === false){
      this.isOrderSent = false;
    }
    else{
      this.isOrderSent = true;
      this.order = this.orderService.todayUserOrder;
      this.sentPrice = this.orderService.receivedPrice;
      //console.log('Commande actuelle après la condition : ' + this.order.id);
      
    }*/
  }

orderedTodayTest(){
  this.orderService.getAllOrders().subscribe(allOrders => {
    this.allOrders = allOrders
    this.allOrders.filter(orders => orders.user_id === this.loginService.getCurrentUser().id).forEach(orderOfUser => {
      if(this.currentDateRegEx.test(orderOfUser.date)){
        console.log("orderSent > TRUE : l'user ne peut plus commander");
        this.isOrderSent = true;
        this.order = orderOfUser;
        this.previousOrderProduct();

      }
    });
  });
}

previousOrderProduct(){
  this.listItemService.getItemById(this.order.product_id).subscribe(getitem =>  
    {
      this.previousOrderedItem = getitem;
      this.sentPrice = this.getTotalPriceOfPreviousOrder();
      console.log("test récupération produit commandé précédemment s'il y a bien une commande", this.previousOrderedItem);
      console.log("test récupération prix total si commande précédante existe", this.sentPrice);
    })
}


getTotalPriceOfPreviousOrder(){
  let total: number;
  let itemPrice: number;
  let optionTotal: number = 0;
  itemPrice = this.previousOrderedItem.prix;
  if(this.order.option_ids.length > 0){
    for(let i = 0; i < this.order.option_ids.length; i ++){
      this.previousOrderedItem.options.forEach(selectedOption => {
        if(selectedOption.id === this.order.option_ids[i]){
          optionTotal += selectedOption.surcout;
        }
      })
    }
  }
  total  = itemPrice + optionTotal;
  console.log("itemPrice : ", itemPrice);
  console.log("optionTotal : ", optionTotal);
  console.log("total : ", total);
  return total;
 
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
  //console.log("payé");
  this.isPaid = true;
}

paidFalse(){ // C'EST SALE, BERK
  //console.log("non-payé");
  this.isPaid = false;
}

  orderGoEvent(){
    this.timeLimitResponse = this.orderService.getTimeLimitResponse();
    //console.log("timeLimitResponse : " , this.timeLimitResponse);
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
        //console.log("La commande a été envoyée");
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
    console.log('test du sentPrice : ', this.sentPrice);
    this.orderService.deleteOrder(this.order).subscribe();
    if(!this.order.paye){
      this.user.credit = this.user.credit - this.sentPrice; // VERIFIER QU'EN CAS DE SUPPRESSION D'UNE COMMANDE EN COURS APRES DECONNEXION, LE CREDIT USER NE PASSE PLUS A NaN
      this.userService.updateUser(this.user).subscribe();
    }
    // voir si je ne dois pas rajouter un this.sentPrice = 0; ici
    this.isOrderSent = false;
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