import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RolesEnum } from 'src/app/enum/roles.enum';
import { Article } from 'src/app/models/Article/Article.model';
import { User } from 'src/app/models/User/User.model';
import { ArticlesService } from 'src/app/services/articles.service';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-private-page',
  templateUrl: './private-page.component.html',
  styleUrls: ['./private-page.component.css'],
})
export class PrivatePageComponent implements OnInit, OnDestroy {
  // public currentUsertoken: string = this.authService.currentUsertoken.getValue();
  public list: string[] = [];
  public currUserSub: Subscription;
  public currUser: User;
  public selectedMenu = '';
  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private artService: ArticlesService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.currUserSub = this.authService.currentUser.subscribe((value: User) => {
      this.currUser = value;
      console.log('private user oninit is : ', this.currUser);
    });
  }
  ngOnDestroy(): void {
    this.currUserSub.unsubscribe();
  }

  // just to test the JWT interceptor
  public getAllLogin(): void {
    this.userService
      .getAll()
      .subscribe(
        (userList: User[]) =>
          (this.list = userList.map((user: User) => user.login))
      );
  }

  showActiveRoute(): void {
    console.log('this route is : ', window.location.pathname);
  }

  onSelectMenu(menu: string): void {
    this.selectedMenu = menu;
  }

  saveUser(user: User): void {
    this.userService.update(user).subscribe();
  }

  saveArticle(article: Article): void {
    // this.artService.save(article).subscribe();
  }
}
