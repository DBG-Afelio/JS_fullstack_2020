import { Component, OnInit, OnChanges } from '@angular/core';
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

  constructor(
    private usersService: UsersService,
    private timerService: TimerService,
    private commandsService: CommandesService,
    private router: Router,
    private activeRout: ActivatedRoute
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

  switchMenu() {
    this.extend_menu = !this.extend_menu;
  }

  disconnect() {
    this.usersService.user_co = undefined;
    this.usersService.user.next(undefined);
    this.router.navigate(['/']);
  }
}
