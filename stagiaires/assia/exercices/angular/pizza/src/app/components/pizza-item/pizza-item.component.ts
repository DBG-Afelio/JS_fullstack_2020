import { Component, Input } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';

@Component({
    selector: 'pizza-item',
    styleUrls: ['pizza-item.component.scss'],
    templateUrl : './pizza-item.component.html'
})
export class PizzaItemComponent {
    @Input() pizza: Pizza;

    constructor() {
        
    }
}
