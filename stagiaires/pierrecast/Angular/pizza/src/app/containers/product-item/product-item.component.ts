import { Component, OnInit} from '@angular/core';
import { PizzasService } from 'src/app/services/pizzas.service';
import { Pizza } from 'src/app/models/pizza.model';
import { ActivatedRoute } from '@angular/router';
import { ToppingsService } from 'src/app/services/toppings.service';

@Component({
  selector: 'product-item',
  styleUrls: ['product-item.component.scss'],
  templateUrl : './product-item.component.html'
})
export class ProductItemComponent implements OnInit {
  private pizzaId: number;
  public pizza: Pizza;
  public toppings: string[];

  constructor(
    private pizzaService: PizzasService,
    private toppingService: ToppingsService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.activatedRoute.paramMap.subscribe((params) => {
      this.pizzaId = Number(params.get('id'));
      if (this.pizzaId !== 0 ) {
        this.pizzaService.getPizzasById(this.pizzaId).subscribe((pizza: Pizza) => {
          this.pizza = pizza;
        });
      } else {
        this.pizza = { 
          id: 0, 
          name:'', 
          toppings:[]
        };
      }
    }); 
  }

  ngOnInit() {
    this.toppingService.getToppings().subscribe((toppings) => {
      this.toppings = toppings;
    })
  }
}
