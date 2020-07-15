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
    if(this.usersService.user_co?.admin) {
      return this.thisDay ? this.getCommandsOfThisDay() : this.commandes;
    } else {
      return this.commandes.filter(command => command.user_id === this.usersService.user_co.Id);
    }
  }

  switchDay():void {
    this.thisDay = !this.thisDay;
  }

  isAdmin():boolean{
    return this.usersService.user_co?.admin;
  }

  getTabCommands():TabCommand[] {
    return this.getCommands().map(command => TabCommand.fromCommand(command));
  }


}
class TabCommand {
 constructor(public produit:string,public options:string,public prix:number,public payer:string,public date:string) {
   this.produit = produit;
   this.options = options;
   this.prix = prix;
   this.payer = payer;
   this.date = date;
 }
 static fromCommand(command:Commande):TabCommand {
  return new TabCommand(
    command.product.nom,
    command.options.map(option => option.nom).toLocaleString(),
    command.getTotal(),
    command.paye ? 'Oui' : 'Non',
    command.date.toLocaleDateString()
  )
 }
}