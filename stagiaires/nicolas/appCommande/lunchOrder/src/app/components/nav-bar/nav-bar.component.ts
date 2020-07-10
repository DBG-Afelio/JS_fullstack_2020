import { Component, OnInit } from '@angular/core';
import { UsersListService } from 'src/app/services/users-list.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user:User
  constructor(private usersListService:UsersListService, private router:Router) {
    this.user=usersListService.getCurrentUser();
   }

  ngOnInit(): void {
  }
  onButtonLogoutClick(){

    if(confirm("Voulez-vous vraiment vous déconnecter?")){

      this.usersListService.logoutUser();
      this.ngOnInit();
      this.router.navigate([""])

    }

  }

}
