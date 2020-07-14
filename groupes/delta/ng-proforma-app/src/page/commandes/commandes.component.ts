import { Component, OnInit } from '@angular/core';
import { CommandesService } from 'src/service/commandes.service';
import { Commande } from 'src/model/commande';
import { UsersService } from 'src/service/users.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  commandes: Commande[];
  thisDay: boolean = true;
  constructor(private commandsService:CommandesService, private usersService:UsersService) { }

  ngOnInit() {
    this.commandsService.getCommandesListWithObject().subscribe(commands => this.commandes = commands)
  }

  getCommandsOfThisDay():Commande[] {
    const today = new Date();
    return this.commandes.filter(command => command.date.getDate() === today.getDate() && command.date.getMonth() === today.getMonth() && command.date.getFullYear() === today.getFullYear())
  }

  getCommands():Commande[] {
    if(this.usersService.user_co.admin) {
      return this.thisDay ? this.getCommandsOfThisDay() : this.commandes;
    } else {
      return this.commandes.filter(command => command.user_id === this.usersService.user_co.Id);
    }
  }

}
