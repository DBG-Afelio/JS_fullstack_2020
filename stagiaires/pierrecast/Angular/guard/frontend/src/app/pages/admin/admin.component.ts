import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/userModels/User';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public currentUser: any;
  public users: User[];
  
  constructor(
    private authService: AuthService
  ) { 
    
    this.initCurrentUser();
  }

  ngOnInit(): void {
    this.initCurrentUser();
  }

  initCurrentUser() {
    this.authService.getCurrentUser().subscribe(
      (user: any) => {
        this.currentUser = user;
      }
    );
  }
}
