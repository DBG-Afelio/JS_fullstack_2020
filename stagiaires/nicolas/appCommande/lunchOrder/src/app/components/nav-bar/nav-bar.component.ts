import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersListService } from 'src/app/services/users-list.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersListService } from 'src/app/services/orders-list.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() toggleSideNav:EventEmitter<boolean> = new EventEmitter();

  currentUser:User

  openRemainingTime:number;
  closeRemainingTime:number;

  constructor(private usersListService:UsersListService,
              private router:Router,
              private ordersListService:OrdersListService){}

  ngOnInit(): void {

    this.usersListService.getCurrentUser().subscribe(currentUserFound => this.currentUser = currentUserFound);

    this.openRemainingTime = this.getTimeLeftBeforeOpen();
    this.closeRemainingTime = this.getTimeLeftBeforeClose();

  }
  
  onButtonLogoutClick(){

    if(confirm("Voulez-vous vraiment vous déconnecter?")){

      this.usersListService.logoutUser();
      this.router.navigate([""])

    }

  }
  onToggleDrawerClick(){

    this.toggleSideNav.emit(true)

  }
  isOrderAvailable(){

    let currentHour = new Date().getHours();
    let minOrderHour = this.ordersListService.minOrderHour;
    let maxOrderHour = this.ordersListService.maxOrderHour;

    return currentHour > minOrderHour && currentHour < maxOrderHour

  }
  getTimeLeftBeforeOpen(){

    let date = new Date();
    let dateHour = date.getHours()*3600;
    let dateMinutes = date.getMinutes()*60;

    let currentDateInSec = dateHour + dateMinutes + date.getSeconds();

    let openingHour = this.ordersListService.minOrderHour*3600;

    let timeLeft = Math.abs(currentDateInSec - openingHour);

    if(dateHour > openingHour){

      timeLeft = 86400 - timeLeft

    } 

    return timeLeft


  }
  getTimeLeftBeforeClose(){

    let date = new Date();
    let dateHour = date.getHours()*3600;
    let dateMinutes = date.getMinutes()*60;

    let currentDateInSec = dateHour + dateMinutes + date.getSeconds();

    let closingHour = this.ordersListService.maxOrderHour*3600;

    let timeLeft = Math.abs(currentDateInSec - closingHour);
    
    if(dateHour > closingHour){

      timeLeft = Math.abs(86400 - timeLeft)

    } 

    return timeLeft


  }

}
