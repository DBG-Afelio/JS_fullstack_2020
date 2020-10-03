import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    public currentUsertoken: string = this.authService.currentUsertoken.getValue();
    constructor(
      private authService: AuthService,
      private router: Router,
  ) {}

  ngOnInit(): void {
    console.log('current user token : ', this.currentUsertoken);
  }

    public logout(): void {
        this.authService.removeSessionUser();    
        location.reload();    
    }


}
