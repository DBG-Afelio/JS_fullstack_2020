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

 // public pizzas: Pizza[];
  public toppings: string[];
  public pizza: Pizza;
  public pizzaId: number = 0;
/**
 * CLASSE container gérant à partir de la route les cas 'nouvelle pizza' ou 'modifcation pizza existante'
 * c'est elle qui gère les appels services
 */

  constructor(
    private toppingService: ToppingsService,
    private pizzaService: PizzasService,
    private routeActive: ActivatedRoute,
    private router: Router
  ) {
    this.routeActive.paramMap.subscribe((params) => {
      this.pizzaId = Number(params.get('id'));
      console.log('pizzaID = ', this.pizzaId);
      if (this.pizzaId !== 0) {
        this.pizzaService.getPizzasById(this.pizzaId).subscribe((pizzouille: Pizza) => {
          this.pizza = pizzouille;
        })
      } else {
        this.pizza = { id: 0 , name: '', toppings: [], favorite: false};
      }
    })
   
  }

  ngOnInit() {
    this.toppingService.getToppings().subscribe((toppings) => {
      this.toppings = toppings;
    })
  }

  create(pizza: Pizza): void{
    this.pizzaService.createPizza(pizza).subscribe(() => this.router.navigate(['/']));
  }

  update(pizza: Pizza): void {
    this.pizzaService.updatePizza(pizza).subscribe(() => this.router.navigate(['/']));
  }

  remove(pizza: Pizza): void {
    this.pizzaService.removePizza(pizza).subscribe(() => this.router.navigate(['/']));
  }

}
