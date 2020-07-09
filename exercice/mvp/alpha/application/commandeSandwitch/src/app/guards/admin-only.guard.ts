import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/userService/user.service';
import { User } from '../models/userModel/user';

@Injectable({
  providedIn: 'root'
})
export class AdminOnlyGuard implements CanActivate {

  public currentUser: User = null;
  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.userService.getCurrentUser().subscribe((currUser) => this.currentUser = currUser)
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (!this.currentUser?.isAdmin) {
      window.alert('Vous n\'avez pas les droits pour visualiser cette page (Admin Only)');
      this.router.navigate([''])
    }
    console.log('guard : ', this.currentUser?.isAdmin);
    return this.currentUser?.isAdmin;
  }
  
}
