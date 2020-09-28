import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    public currentUserLogin: string = '';
    constructor(
      private loginService: LoginServiceService
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
