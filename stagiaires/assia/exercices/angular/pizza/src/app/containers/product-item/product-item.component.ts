import { Component, OnInit} from '@angular/core';
import { PizzasService } from 'src/app/services/pizzas.service';
import { ToppingsService } from 'src/app/services/toppings.service';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from 'src/app/models/pizza.model';

@Component({
  selector: 'product-item',
  styleUrls: ['product-item.component.scss'],
  templateUrl : './product-item.component.html'
})
export class ProductItemComponent implements OnInit {

  public pizzas: Pizza[];
  public toppings: string[];
  public pizza: Pizza = {};
  public pizzaId: number = 0;
/**
 * CLASSE container gérant à partir de la route les cas 'nouvelle pizza' ou 'modifcation pizza existante'
 * c'est elle qui gère les appels services
 */

  constructor(
    private toppingService: ToppingsService,
    private pizzaService: PizzasService,
    private routeActive: ActivatedRoute
  ) {
    this.routeActive.paramMap.subscribe((params) => {
      this.pizzaId = Number(params.get('id'));
      if (this.pizzaId !== NaN) {
        this.pizzaService.getPizzasById(this.pizzaId).subscribe((pizzouille: Pizza) => {
          this.pizza = pizzouille;
        })
      } else {
        this.pizza = {};
        this.pizza.id = 0;
      }
    })
  }

  ngOnInit() {
    this.toppingService.getToppings().subscribe((toppings) => {
      this.toppings = toppings;
    })
  }
}
