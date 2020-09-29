import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInOnlyGuard implements CanActivate {


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
        
        let isLoggedIn = true;
        if(!this.currentUserLogin) {
            window.alert('Vous n\'avez pas les droits pour visualiser cette page');
            this.router.navigate(['']);
            isLoggedIn = false;
        }
        return isLoggedIn;
  }
  
}
