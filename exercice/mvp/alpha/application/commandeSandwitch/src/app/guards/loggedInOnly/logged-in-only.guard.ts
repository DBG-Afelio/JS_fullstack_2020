import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/userModel/user';
import { UserService } from 'src/app/services/userService/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInOnlyGuard implements CanActivate {

  public currentUser: User = null;
  constructor(
    private userService: UserService,
    private router: Router,
  ) {
    this.userService.getCurrentUser().subscribe((currUser) => this.currentUser = currUser)
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let allowed: boolean = true;
    if (!this.currentUser) { //ou this.currentUser === null
      allowed = false;
      window.alert('Vous n\'avez pas les droits pour visualiser cette page (Connected User Only)');
      this.router.navigate([''])
    }
    console.log('loggedin guard : ', allowed, this.currentUser);
    return allowed;
  }
  
}
