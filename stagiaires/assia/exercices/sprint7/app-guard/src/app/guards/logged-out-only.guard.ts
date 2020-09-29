import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedOutOnlyGuard implements CanActivate {
    public currentUserLogin: string = '';
    constructor(
        private loginService: AuthService,
        private router: Router,
    ){
        this.loginService.userLogin.subscribe((value)=> this.currentUserLogin = value);
    }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let isLoggedOut = true;
        if(this.currentUserLogin) {
            this.router.navigate(['/private']);
            isLoggedOut = false;
        }
        return isLoggedOut;
  }
  
}
