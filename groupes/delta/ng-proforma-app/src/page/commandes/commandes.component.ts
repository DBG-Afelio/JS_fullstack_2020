import { Component, OnInit } from '@angular/core';
import { CommandesService } from 'src/service/commandes.service';
import { Commande } from 'src/model/commande';
import { UsersService } from 'src/service/users.service';
import { Router } from '@angular/router';
import { FournService } from 'src/service/fourn.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  commandes: Commande[];
  thisDay: boolean = true;
  constructor(private commandsService:CommandesService, private usersService:UsersService, private router:Router) { }

  ngOnInit() {
    this.commandsService.getCommandesListWithObject().subscribe(commands => this.commandes = commands);
    if(!this.usersService.user_co) {
      this.router.navigate(['/']);
    }
  }

  getCommandsOfThisDay():Commande[] {
    const today = new Date();
    const commands = this.commandes?.filter(command => command.date.getDate() === today.getDate() && command.date.getMonth() === today.getMonth() && command.date.getFullYear() === today.getFullYear());
    return commands && commands.length > 0 ? commands : [];
  }

  getTotalOfThisDay():number {
    return this.getCommandsOfThisDay().reduce((commande1,commande2) => commande1 + commande2.getTotal(), 0)
  }

  getTotalUnpaidOfThisDay():number {
    return this.getCommandsOfThisDay().filter(command => !command.paye).reduce((commande1,commande2) => commande1 + commande2.getTotal(), 0)
  }

  getTotalPaidOfThisDay():number {
    return this.getTotalOfThisDay() - this.getTotalUnpaidOfThisDay();
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
 constructor(
    public id:number,
    public produit:string,
    public fournisseur:string,
    public options:string,
    public prix:number,
    public payer:string,
    public date:string
  ) {
    this.id = id;
    this.produit = produit;
    this.fournisseur = fournisseur;
    this.options = options;
    this.prix = prix;
    this.payer = payer;
    this.date = date;
 }
 static fromCommand(command:Commande):TabCommand {
  return new TabCommand(
    command.id,
    command.product.nom,
    command.product.fournisseur.nom,
    command.options.map(option => option.nom).toLocaleString(),
    command.getTotal(),
    command.paye ? 'Oui' : 'Non',
    command.date.toLocaleDateString()
  )
 }
}