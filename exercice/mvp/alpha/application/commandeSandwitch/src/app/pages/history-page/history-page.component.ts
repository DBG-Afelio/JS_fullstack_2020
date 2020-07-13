import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
import { OrderService } from 'src/app/services/orderService/order.service';
import { User } from 'src/app/models/userModel/user';
import { FullOrder } from 'src/app/models/fullOrderModel/fullOrder';
import { Option } from 'src/app/models/optionModel/Option';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  public currentUser: User = null;
  public ordersHistory: FullOrder[] = [];

  constructor(
    private userService: UserService,
    private orderService: OrderService,
    private router: Router,
  ) { 
    this.userService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
      if (user) {
        this.orderService.getAllFullOrders().subscribe((fullHistory) => {
          this.ordersHistory = fullHistory.filter(fullOrder => fullOrder.getOrder().userId === user.id);
        });
      }
    });
  }

  ngOnInit(): void {
  }
  public goToProduct(productId:number, selectOptions: Option[]): void{
    this.router.navigateByUrl(`/produit/${productId}`);
    ///il faudra trouver un moyen de preremplir les options > obs.?
    //ou faire un popup recap pour passer directement au paiement
  }
  
  public optionsToString(selectedOptions: Option[]): string{
    let optionsStr: string = '';
    if (selectedOptions.length > 0) {
      selectedOptions.forEach(option => optionsStr += `${option.nom} `);
    } else {
      optionsStr = '-';
    }
    return optionsStr;
  }



}
