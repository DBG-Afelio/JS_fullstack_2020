import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User/User.model';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-private-page',
  templateUrl: './private-page.component.html',
  styleUrls: ['./private-page.component.css']
})
export class PrivatePageComponent implements OnInit {

    public currentUserLogin: string = '';
    public currentUser: User = null;
    
    constructor(
      private authService: AuthService,
      private userService: UsersService,
  ) { 
      this.authService.userLogin.subscribe((value) => {
          this.currentUserLogin = value;
          if (this.currentUserLogin){
              this.userService.getAll().subscribe((list: User[]) => this.currentUser = list.find((userScreened: User) => userScreened.login === this.currentUserLogin))
          }
        })
  }

  ngOnInit(): void {
  }

  public logout(): void {
    this.authService.removeSessionUser();
  }
}
