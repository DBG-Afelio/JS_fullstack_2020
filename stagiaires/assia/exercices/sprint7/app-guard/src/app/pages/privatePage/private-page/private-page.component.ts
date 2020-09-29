import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-private-page',
  templateUrl: './private-page.component.html',
  styleUrls: ['./private-page.component.css']
})
export class PrivatePageComponent implements OnInit {

    public currentUserLogin: string = '';
    constructor(
      private authService: AuthService
  ) { 
      this.authService.userLogin.subscribe((value) => this.currentUserLogin = value)
  }

  ngOnInit(): void {
  }

  public logout(): void {
    this.authService.removeSessionUser();
  }
}
