import { Component, OnInit} from '@angular/core';
import { PizzasService } from 'src/app/services/pizzas.service';
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

  constructor() {
    
  }

  ngOnInit() {
    
  }
}
