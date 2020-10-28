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
  public currUserSub: Subscription;
  public currUser: User;

  constructor(private authService: AuthService, public router: Router) {}

  ngOnInit(): void {
    this.currUserSub = this.authService.currentUser?.subscribe(
      (value: User) => (this.currUser = value)
    );
  }
  ngOnDestroy(): void {
    this.currUserSub?.unsubscribe();
  }





//   saveArticle(article: Article): void {
//     console.log('EMIT 4-------------- submitted article  --- request sent : ', article);
//     if (article.id !== 0) {
//       this.artService.update(article).subscribe();

//     } else {
//       this.artService.create(article).subscribe();
//     }
//   }
}
