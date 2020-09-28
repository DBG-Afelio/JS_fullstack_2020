import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    public currentUserLogin: string = '';
    constructor(
      private loginService: LoginServiceService
  ) { 
      this.loginService.userLogin.subscribe((value) => this.currentUserLogin = value)
  }

  ngOnInit(): void {
  }

  registerLogin(login: string): void {
    this.loginService.saveUserLogin(login);
  }

}
