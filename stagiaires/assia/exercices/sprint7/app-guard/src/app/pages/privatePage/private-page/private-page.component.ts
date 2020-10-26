import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RolesEnum } from 'src/app/enum/roles.enum';
import { StatusEnum } from 'src/app/enum/status.enum';
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
  public articleList: Article[] = [];
  public filteredList = [];
  public columnsToShow: string[] = [];

  // public article: Article = null;
  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private artService: ArticlesService,
    public router: Router
  ) {
    this.artService.getAll().subscribe((list) => (this.articleList = list));
  }

  ngOnInit(): void {
    this.currUserSub = this.authService.currentUser?.subscribe(
      (value: User) => (this.currUser = value)
    );
  }
  ngOnDestroy(): void {
    this.currUserSub?.unsubscribe();
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

  onSelectMenu(menu: string): void {
    this.selectedMenu = menu;
    this.setCustomList(menu);
  }

  public setCustomList(route: string): void {
    this.filteredList = [];
    if (this.articleList?.length > 0) {
      this.columnsToShow = ['title', 'tags', 'author', 'publiDate', 'status'];

      if (route.includes('draft')) {
        this.filteredList = this.articleList.filter(
          (art: Article) =>
            art.status === StatusEnum.IN_PROGRESS &&
            this.currUser.id === art.author.id
        );
        this.columnsToShow = ['title', 'tags', 'status'];
      } else if (route.includes('pending')) {
        this.filteredList = this.articleList.filter(
          (art: Article) => art.status === StatusEnum.TO_REVIEW
        );
        if (this.currUser.role === RolesEnum.AUTHOR) {
          this.filteredList = this.filteredList.filter(
            (art: Article) => this.currUser.id === art.author.id
          );
          this.columnsToShow = ['title', 'tags', 'publiDate', 'status'];
        }
      } else if (route.includes('published')) {
        this.filteredList = this.articleList.filter(
          (art: Article) => art.status === StatusEnum.PUBLISHED
        );
        if (this.currUser.role === RolesEnum.AUTHOR) {
          this.filteredList = this.filteredList.filter(
            (art: Article) => this.currUser.id === art.author.id
          );
          this.columnsToShow = ['title', 'tags', 'publiDate'];
        }
      }
    }
  }

  saveUser(user: User): void {
    this.userService.update(user).subscribe();
  }

  saveArticle(article: Article): void {
    console.log('EMIT 4-------------- submitted article  --- request sent : ', article);
    if (article.id !== 0) {
      this.artService.update(article).subscribe();

    } else {
      this.artService.create(article).subscribe();
    }
  }
}
