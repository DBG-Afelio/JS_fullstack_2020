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

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  DEADLINE = {HOURS:10, MINUTES: 0};
  fourn_id: number;
  fournisseur: Fourn;
  selectedProduct: Product;
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

  }

  checkeOrder() {
    
    console.log(this.hour.getMinutes());
    if ( this.fournisseur.openToday()) {
      this.message = 'You can order any thing you like ';
    }
    
    else if (this.fournisseur.openToday()===false) {
      this.message = "Désolées les commandes ne sont pas disponibles le week-end" ; 
    }

  }

  sendOrder(product:Product) {
    this.commandsService.pending_command = new Commande(
      this.usersService.user_co.Id,
      product.id
    )
  }
 

  stillInTime(){
    return this.hour.getHours() < this.DEADLINE.HOURS ;
  }
  
}
