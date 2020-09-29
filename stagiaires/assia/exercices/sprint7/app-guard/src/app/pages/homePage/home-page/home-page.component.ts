import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    public currentUserLogin: string = '';
    constructor(
      private loginService: AuthService
  ) { 
      this.loginService.userLogin.subscribe((value) => {
          this.currentUserLogin = value;
          console.log('current user login : ', this.currentUserLogin)
        });
  }

  ngOnInit(): void {
  }

  public logout(): void {
      this.loginService.removeUserLogin();
  }

}
