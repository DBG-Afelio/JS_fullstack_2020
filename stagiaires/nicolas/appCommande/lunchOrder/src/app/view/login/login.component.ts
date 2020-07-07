import { Component, OnInit } from '@angular/core';
import { UsersListService } from 'src/app/services/users-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userListService:UsersListService,private router:Router) { 
    

  }

  ngOnInit(): void {

    if(this.userListService.getCurrentUser()){

      this.router.navigate([""])
      
    }
    
  }

}
