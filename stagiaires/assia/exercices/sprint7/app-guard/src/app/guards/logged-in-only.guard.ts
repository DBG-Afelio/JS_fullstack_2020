import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/User/User.model';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInOnlyGuard implements CanActivate {


    public currentUser: User;

    constructor(
        private authService: AuthService,
        private router: Router,
    ){
      this.authService.currentUser.subscribe((value) => {
        this.currentUser = value;
        console.log('logged in GUARD -- user : ', value);
      });
    
    }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
        let isLoggedIn = true;
        
        if(!this.currentUser) {
            window.alert('Vous n\'avez pas les droits pour visualiser cette page');
            this.router.navigate(['']);
            isLoggedIn = false;
        }
        return isLoggedIn;
  }
  
}
