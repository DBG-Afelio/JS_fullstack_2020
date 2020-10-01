import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public logged: boolean;

  constructor (
    private authService: AuthService, 
    private router: Router
  ) { 
    this.authService.isLogged().subscribe(
      (auth: boolean) => {
        this.logged = auth;
      }
    );
  }

  ngOnInit(): void {
  }

  isLogged() {
    return !!this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/sign-in');
  }
}
