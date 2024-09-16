import { Component, OnInit } from '@angular/core';
import { CommandesService } from 'src/service/commandes.service';
import { UsersService } from 'src/service/users.service';
import { User } from 'src/model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from 'src/model/commande';
import { Option } from 'src/model/option';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  user: User;
  commande: Commande;

  constructor(private commandesService:CommandesService, private userService:UsersService, private activeRoute:ActivatedRoute, private route:Router) {
    this.userService.user.subscribe((user:User) => this.user = user);
    if(this.userService.user_co) { this.user = this.userService.user_co; }
  }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(param => {
      const id: number = Number(param.get('id'));
      if(id > 0) {
        this.commandesService.getCommandeByIdWithObject(id).subscribe(commande => {
          if(this.userService.user_co && (this.userService.user_co?.admin || commande.user_id === this.userService.user_co?.id)) {
            this.commande = commande;
          } else {
            this.route.navigate(['../']);
          }
        })
      } else if (this.userService.user_co && this.commandesService.PendingCommand) {
        this.commande = this.commandesService.PendingCommand;
      } else {
        this.route.navigate(['../']);
      }
    })
  }

  optionsChange(options:Option[]): void {
    if(!this.commande.id as boolean){
      this.commande.setOptions(options);
      this.commandesService.PendingCommand.setOptions(options);
    }
  }

  confirmCommand() {
    this.commandesService.creatCommand(this.commande.toDto()).subscribe(command => this.commande = command);
    this.commandesService.PendingCommand = undefined;
  }

}
