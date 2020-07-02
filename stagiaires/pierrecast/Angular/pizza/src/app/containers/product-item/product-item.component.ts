import { Component, OnInit} from '@angular/core';
import { PizzasService } from 'src/app/services/pizzas.service';
import { Pizza } from 'src/app/models/pizza.model';
import { ActivatedRoute } from '@angular/router';
import { ToppingsService } from 'src/app/services/toppings.service';
import {Router} from '@angular/router';

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
    private activatedRoute: ActivatedRoute,
    private router: Router
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
          toppings:[],
        };
      }
    }); 
  }

  public createPizza(pizza: Pizza) {
    this.pizzaService.createPizza(pizza).subscribe(() => {
      this.navigateToMain();
    });
  }

  public updatePizza(pizza: Pizza) {
    this.pizzaService.updatePizza(pizza).subscribe(() => {
      this.navigateToMain();
    });
  }

  public removePizza(pizza: Pizza) {
    this.pizzaService.removePizza(pizza).subscribe(() => {
      this.navigateToMain();
    });
  }
  
  public navigateToMain() {
    this.router.navigateByUrl('/');
  }

  ngOnInit() {
    this.toppingService.getToppings().subscribe((toppings) => {
      this.toppings = toppings;
    });
  }
}
