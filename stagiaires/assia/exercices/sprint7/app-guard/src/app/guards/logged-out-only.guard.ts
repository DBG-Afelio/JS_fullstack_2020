import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/User/User.model';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedOutOnlyGuard implements CanActivate {
    public currentUser: User;
    constructor(
        private authService: AuthService,
        private router: Router,
    ){
        this.authService.currentUser.subscribe((value)=> this.currentUser = value);
    }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let isLoggedOut = true;
        if(this.currentUser) {
            this.router.navigate(['/private']);
            isLoggedOut = false;
        }
        return isLoggedOut;
  }
  
}
