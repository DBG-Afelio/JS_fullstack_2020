import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    public currentUsertoken: string = '';
    constructor(
      private authService: AuthService,
      private router: Router,
  ) { 
      this.authService.currentUsertoken.subscribe((value) => {
          this.currentUsertoken = value;
          console.log('current user login : ', this.currentUsertoken)
        });
  }

  ngOnInit(): void {
  }

    public logout(): void {
        this.authService.removeSessionUser();        
    }


}
