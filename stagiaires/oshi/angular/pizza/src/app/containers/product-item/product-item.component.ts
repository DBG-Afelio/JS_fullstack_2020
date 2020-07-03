import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from 'src/app/models/pizza.model';
import { ToppingsService } from 'src/app/services/toppings.service';
import { PizzasService } from 'src/app/services/pizzas.service';
import { Location } from '@angular/common';

@Component({
  selector: 'product-item',
  styleUrls: ['product-item.component.scss'],
  templateUrl : './product-item.component.html'
})
export class ProductItemComponent implements OnInit, OnDestroy {

/**
 * CLASSE container gérant à partir de la route les cas 'nouvelle pizza' ou 'modifcation pizza existante'
 * c'est elle qui gère les appels services
 */
  pizza: Pizza;
  toppings: string[];
  subscritionToppingsService;
  subscritionActivatedService;

  constructor(
    private activatedRoute: ActivatedRoute,
    private toppingsService: ToppingsService,
    private pizzasService: PizzasService,
    private location: Location,
    private rooter: Router
  ) {}

  ngOnInit() {
    this.subscritionToppingsService = this.toppingsService.getToppings().subscribe(toppings => {
      this.toppings = toppings;
    });
    this.subscritionActivatedService = this.activatedRoute.paramMap.subscribe((params) => {
      const pizzaId:number = Number(params.get('id'));
      if(!pizzaId as boolean) {
        this.pizza = { name: "", toppings: [], id: 0};
      } else {
        this.pizzasService.getPizzasById(pizzaId).subscribe(pizza => {
          this.pizza = pizza;
        })
      }
    });
  }

  ngOnDestroy() {
    this.subscritionActivatedService.unsubscribe();
    this.subscritionToppingsService.unsubscribe();
  }

  createPizza(pizza: Pizza): void {
    this.pizzasService.createPizza(pizza).subscribe(
      data => {
        console.log('POST Request is successful ', data);
        this.location.go(`/products/${data.id}`);
        this.pizza = data;
      },
      error => {
        console.log('Error', error);
      }
    );
  }

  updatePizza(pizza: Pizza): void {
    this.pizzasService.updatePizza(pizza).subscribe(
      data => {
        console.log('PUT Request is successful ', data);
        this.pizza = data;
      },
      error => {
        console.log('Error', error);
      }
    );
  }

  removePizza(pizza: Pizza): void {
    this.pizzasService.removePizza(pizza).subscribe(
      data => {
        console.log('DELETE Request is successful ', data);
        this.location.go(``);
        this.rooter.navigate(['/']);
      },
      error => {
        console.log('Error', error);
      }
    );
  }
}
