import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { AuthConfig } from 'angular-oauth2-oidc';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './models/User/User.model';
import { AuthService } from './services/auth.service';

import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

  title = 'app-guard';
  public currUserSub: Subscription;
  public currUser: User;
  public currUrl: '';
  public isPrivate: boolean = false;
  public baseUrlApi: string;

  constructor(private authService: AuthService, private router: Router) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currUrl = event['urlAfterRedirects'];
        this.isPrivate = this.currUrl.includes('private');
      });

    console.log(router.url);
    this.baseUrlApi = environment.baseApiUrl;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.currUserSub = this.authService.currentUser.subscribe(
      (value: User) => (this.currUser = value)
    );
  }
  ngOnDestroy(): void {
    this.currUserSub.unsubscribe();
  }
}
