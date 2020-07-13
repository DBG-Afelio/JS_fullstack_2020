import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FournService } from 'src/service/fourn.service';
import { Fourn } from 'src/model/fourn';
import { Product } from 'src/model/product';
import { ProductService } from 'src/service/product.service';
import { interval } from 'rxjs';
import { TimerService } from 'src/service/timer.service';
import { CommandesService } from 'src/service/commandes.service';
import { Commande } from 'src/model/commande';
import { UsersService } from 'src/service/users.service';
import { Option } from 'src/model/option';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  DEADLINE = {HOURS:12, MINUTES: 0};
  fourn_id: number;
  fournisseur: Fourn;
  selectedProduct: Product;
  selectedOptions: Option[] = [];
  pending_command: Commande;
  hour: Date;
  message: string;
 



  constructor(private fournService: FournService, private activatedRoute: ActivatedRoute, private productService: ProductService, private timerService: TimerService, private commandsService:CommandesService, private usersService:UsersService) {
    this.activatedRoute.paramMap.subscribe(param => {
      this.fourn_id = Number(param.get('id'));
    })
    this.timerService.date.subscribe((timer) => this.hour = timer);
  }

  ngOnInit() {

    this.fournService.getFournByIdWithProducts(this.fourn_id)
      .subscribe((fourn: Fourn) => {
        this.fournisseur = fourn ;
        this.selectedProduct=fourn.products[0];
      });
      
    


  }

  select(product: Product) {
    this.selectedProduct = product;
    this.selectedOptions = [];
  }

  checkeOrder(product:Product) {
    
    console.log(this.hour.getMinutes());
    if ( this.fournisseur.openToday()) {
      //this.message = 'You can order any thing you like ';
      this.sendOrder(product)
    }
    
    else if (!this.fournisseur.openToday()) {
      this.message = "Désolées les commandes ne sont pas disponibles le week-end" ; 
    }

  }

  sendOrder(product:Product) {
    if(this.usersService.user_co){
      this.commandsService.PendingCommand = new Commande(
        this.usersService.user_co.Id,
        product.id
      ).setProduct(product).setUser(this.usersService.user_co).setOptions(this.selectedOptions);
      this.pending_command = this.commandsService.PendingCommand;
    }
  }

  optionsChange(options:Option[]):void {
    this.selectedOptions = options;
    if(this.commandsService.PendingCommand) {
      this.commandsService.PendingCommand.setOptions(options);
    }
  }
 

  stillInTime(){
    return this.hour.getHours() < this.DEADLINE.HOURS ;
  }
  
}
