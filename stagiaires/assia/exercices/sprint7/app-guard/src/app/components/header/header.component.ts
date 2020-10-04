import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { User } from 'src/app/models/User/User.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public currentUsertoken: string;
  public currUserSub: Subscription;
  public currUser: User;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.currentUsertoken.subscribe(
      (value) => (this.currentUsertoken = value)
    );
  }

  ngOnInit(): void {
    console.log('current user token : ', this.currentUsertoken);
    this.currUserSub = this.authService.currentUser.subscribe((value: User) => this.currUser = value);
  }

  ngOnDestroy(): void {
    this.currUserSub.unsubscribe();
  }

  public logout(): void {
    this.authService.removeSessionUser();
    this.router.navigate(['/home/article']);
  }
}
