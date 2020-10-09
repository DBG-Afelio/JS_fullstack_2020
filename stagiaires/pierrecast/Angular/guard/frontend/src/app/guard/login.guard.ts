import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoginGuard implements CanActivate {
    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
        let permission = true;
        let roles = route.data.roles as Array<string>; 
        const user = this.authService.getCurrentUser().subscribe(user => {
               
            if (!user || !roles.includes(user.roles)) {
                    this.router.navigate(['/sign-in']);
                    permission = false;
                }
        });

        
        return (permission);
    }

    constructor(private authService: AuthService, private router: Router) { }  
}