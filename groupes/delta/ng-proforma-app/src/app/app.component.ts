import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/service/users.service';
import { User } from 'src/model/user';
import { TimerService } from 'src/service/timer.service';
import { Commande } from 'src/model/commande';
import { CommandesService } from 'src/service/commandes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user: User;
  timer: string;
  pending_command: Commande;
  extend_menu: boolean = true;
  route_: any;

  constructor(
    private usersService: UsersService,
    private timerService: TimerService,
    private commandsService: CommandesService,
    public router: Router,
    private activateRoute:ActivatedRoute
  ) {
    this.usersService.user.subscribe((user) => (this.user = user));
    this.timerService.rest_time.subscribe((time) => (this.timer = time));
    this.commandsService.pendingCommand$.subscribe(
      (command) => (this.pending_command = command)
    );
  }
  title = 'ng-proforma-app';

  ngOnInit() {
    this.usersService.user.subscribe((user) => (this.user = user));
  }

  checkRoute() {
    //this.route_ = this.activeRout.firstChild;
    // console.log(this.route_);
    // console.log(this.route_.snapshot.routeConfig.path);
    
  }
  
  switchMenu() {
    this.extend_menu = !this.extend_menu;
  }

  disconnect() {
    this.usersService.user_co = undefined;
    this.usersService.user.next(undefined);
    this.commandsService.PendingCommand = undefined;
    this.router.navigate(['/']);
  }
}
