import { Component, Input } from '@angular/core';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
    selector: 'pizza-item',
    styleUrls: ['pizza-item.component.scss'],
    templateUrl : './pizza-item.component.html'
})
export class PizzaItemComponent {
    @Input() pizza: any;
    constructor(private pizzaService:PizzasService){
        
    }
}
