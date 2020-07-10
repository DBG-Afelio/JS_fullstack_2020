import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/service/users.service';
import { User } from 'src/model/user';
import { TimerService } from 'src/service/timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;
  timer: string;

  constructor(private usersService:UsersService, private timerService:TimerService) {
    this.usersService.user.subscribe(user => this.user = user);
    this.timerService.rest_time.subscribe(time => this.timer = time);
  }
  title = 'ng-proforma-app';

  ngOnInit() {
    this.usersService.user.subscribe(user => this.user = user);
  }
}
