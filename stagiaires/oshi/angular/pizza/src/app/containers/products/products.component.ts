import { Component, OnInit, OnDestroy } from '@angular/core';

import { Pizza } from '../../models/pizza.model';
import { PizzasService } from '../../services/pizzas.service';

@Component({
  selector: 'products',
  styleUrls: ['products.component.scss'],
  templateUrl: './products.component.html'

})
export class ProductsComponent implements OnInit, OnDestroy {
  subscrition;

  public pizzas: Pizza[];

  constructor(private pizzaService: PizzasService) {
   }

  ngOnInit() {
    this.subscrition = this.pizzaService.getPizzas().subscribe((pizzas) => {
      this.pizzas = pizzas;
    });
  }

  ngOnDestroy() {
    this.subscrition.unsubscribe();
  }
}
