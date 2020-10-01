import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LogoutGuard implements CanActivate {
    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
        
        const user = this.authService.isAuthenticated();
        console.log(user);
        if (!user) {
            this.router.navigate(['/sign-in']);
        }
        return (!! user);
        
    }

    constructor(private authService: AuthService, private router: Router) { }  
}