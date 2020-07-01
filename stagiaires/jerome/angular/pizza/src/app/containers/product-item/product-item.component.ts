import { Component, OnInit} from '@angular/core';
import { PizzasService } from 'src/app/services/pizzas.service';
import { ToppingsService } from 'src/app/services/toppings.service';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { Pizza } from 'src/app/models/pizza.model';

@Component({
  selector: 'product-item',
  styleUrls: ['product-item.component.scss'],
  templateUrl : './product-item.component.html'
})
export class ProductItemComponent implements OnInit {
  mode:string;
  pizza:Pizza;
/**
 * CLASSE container gérant à partir de la route les cas 'nouvelle pizza' ou 'modifcation pizza existante'
 * c'est elle qui gère les appels services
 */

  constructor(private pizzasService : PizzasService, private toppingService : ToppingsService,private activatedRoute:ActivatedRoute) {
    activatedRoute.url.subscribe(url=>{ this.mode=url[0].path});
    activatedRoute.paramMap.subscribe(param=>{
      const routeId= param.get('id');
      if(routeId===null){
        this.pizza ={
          name:'',
          toppings : []
        }
      }else{
        pizzasService.getPizzasById(Number(routeId)).subscribe( returnedPizza =>{
          this.pizza = returnedPizza
        });
      }
    })
  }

  ngOnInit() {
    
  }
}
