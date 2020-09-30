import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User/User.model';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-private-page',
  templateUrl: './private-page.component.html',
  styleUrls: ['./private-page.component.css']
})
export class PrivatePageComponent implements OnInit {

    public currentUsertoken: string = '';
    public isOkToShow: boolean = false;
    public error_message: string;
    public list: string[]=[];
    constructor(
      private authService: AuthService,
      private userService: UsersService,
  ) { 
      this.authService.currentUsertoken.subscribe((value) => this.currentUsertoken = value)
  }

  ngOnInit(): void {
  }

  public logout(): void {
    this.authService.removeSessionUser();
  }

  // just to test the JWT interceptor
  public getAllLogin(): void {
    this.userService.getAll().subscribe(
        (userList: User[]) => {
            this.list = userList.map((user: User) => user.login);
            this.isOkToShow = true;
        },
        (error: HttpErrorResponse) => {
            this.isOkToShow = false;
            this.error_message = error.message;
        }
    );
  }
}
