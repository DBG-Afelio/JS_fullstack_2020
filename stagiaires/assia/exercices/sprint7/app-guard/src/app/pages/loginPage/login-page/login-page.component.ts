import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    public currentUserLogin: string = '';
    constructor(
      private loginService: AuthService
  ) { 
      this.loginService.userLogin.subscribe((value) => this.currentUserLogin = value)
  }

  ngOnInit(): void {
  }

  registerLogin(login: string): void {
    this.loginService.saveUserLogin(login);
  }

}
