import { Component, OnInit} from '@angular/core';
import { PizzasService } from 'src/app/services/pizzas.service';
import { ToppingsService } from 'src/app/services/toppings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from 'src/app/models/pizza.model';

@Component({
  selector: 'product-item',
  styleUrls: ['product-item.component.scss'],
  templateUrl : './product-item.component.html'
})
export class ProductItemComponent implements OnInit {

  mode:string;
  pizza:Pizza;
  toppings:string[]

/**
 * CLASSE container gérant à partir de la route les cas 'nouvelle pizza' ou 'modifcation pizza existante'
 * c'est elle qui gère les appels services
 */

  constructor(private pizzasService:PizzasService, private toppingsService: ToppingsService, route:ActivatedRoute, private router:Router) {

    toppingsService.getToppings().subscribe(returnedToppings => this.toppings = returnedToppings)
    route.url.subscribe(url => {
      
        this.mode = url[0].path == 'new' ? 'create' : 'update';
    }
    );
    route.paramMap.subscribe( param => {

      const routeId = param.get('id');

      if(routeId === null){

        this.pizza = {

          name : '' ,
          toppings : [] 

        }
        
      }else{

        pizzasService.getPizzasById(Number(routeId)).subscribe( returnedPizza =>
          
          this.pizza = returnedPizza
          
        )
      }
    })       
  }

  ngOnInit() {
    


  }
  onCreatePizza(pizza:Pizza):void{

    this.pizzasService.createPizza(pizza).subscribe(() => {

      this.router.navigate(['']);

    });
  }
  onUpdatePizza(pizza:Pizza):void{

    this.pizzasService.updatePizza(pizza).subscribe(() => {

      this.router.navigate(['']);

    });

  }
  onRemovePizza(pizza:Pizza):void{


    this.pizzasService.removePizza(pizza).subscribe( () => {

      this.router.navigate(['']);

    });

  }
}
