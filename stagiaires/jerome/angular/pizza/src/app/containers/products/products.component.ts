import { Component, OnInit } from '@angular/core';

import { Pizza } from '../../models/pizza.model';
import { PizzasService } from '../../services/pizzas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'products',
  styleUrls: ['products.component.scss'],
  templateUrl: './products.component.html'

})
export class ProductsComponent implements OnInit {


  public pizzas: Pizza[];

  constructor(private pizzaService: PizzasService,private activatedRoute:ActivatedRoute) {
    this.pizzaService.getPizzas().subscribe((pizzas)=>{
      this.pizzas=pizzas;
    })
   }

  ngOnInit() {
    this.pizzaService.getPizzas().subscribe((pizzas) => {
      this.pizzas = pizzas;
    })
  }
}
