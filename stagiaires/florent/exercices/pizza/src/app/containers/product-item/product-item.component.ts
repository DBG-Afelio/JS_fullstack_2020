import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzasService } from 'src/app/services/pizzas.service';
import { Toppings } from 'src/app/models/toppings.model';
import { ToppingsService } from 'src/app/services/toppings.service';

@Component({
  selector: 'product-item',
  styleUrls: ['product-item.component.scss'],
  templateUrl : './product-item.component.html'
})
export class ProductItemComponent implements OnInit {

  /**
 * CLASSE container gérant à partir de la route les cas 'nouvelle pizza' ou 'modifcation pizza existante'
 * c'est elle qui gère les appels services
  */
  pizza: Pizza;
  toppings: string[];

  constructor(private route: ActivatedRoute, private pizzaservice: PizzasService, private toppingsservice: ToppingsService ) {

    this.route.paramMap.subscribe((params) => {
      let pizzaId:number = Number(params.get('id'));
      if (pizzaId !== 0) {
        this.pizzaservice.getPizzasById(pizzaId).subscribe((pizza: Pizza) => {
            this.pizza = pizza;
        });
      } else {
        this.pizza = {id:0,name:'',toppings:[]};
      }
      
    });
  }

  ngOnInit() {
    this.toppingsservice.getToppings().subscribe(toppings => {
      this.toppings = toppings;
    });
  }
}
