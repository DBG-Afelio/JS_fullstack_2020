import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public currentUser: any;
  
  constructor (
    private authService: AuthService, 
    private router: Router
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

  isLogged() {
    return !!this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/sign-in');
  }
}
