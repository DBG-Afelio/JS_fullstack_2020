import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/service/users.service';
import { User } from 'src/model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;
  constructor(private usersService:UsersService) {
    this.usersService.user.subscribe(user => this.user = user);
  }
  title = 'ng-proforma-app';

  ngOnInit() {
    this.usersService.user.subscribe(user => this.user = user);
  }
}
