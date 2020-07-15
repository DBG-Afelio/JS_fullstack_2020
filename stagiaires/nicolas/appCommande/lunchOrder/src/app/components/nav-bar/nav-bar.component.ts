import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersListService } from 'src/app/services/users-list.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentUser:User
@Output() toggleSideNav:EventEmitter<boolean> = new EventEmitter();

  constructor(private usersListService:UsersListService, private router:Router) {
    usersListService.getCurrentUser().subscribe(currentUserFound => this.currentUser = currentUserFound);
   }

  ngOnInit(): void {
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

}
