import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pizza-toppings',
    styleUrls: ['pizza-toppings.component.scss'],
    templateUrl: './pizza-toppings.component.html'
})
export class PizzaToppingsComponent {
    @Input() toppings: string[] = []; //tous les toppings existants

    @Output() toppingsChange: EventEmitter<string[]>= new EventEmitter(); //emeteur quand on change les toppings sélectionnés 

    @Input() selectedToppings: string[] = []; // toppings sélectionnés

    constructor() { }

    selectTopping(topping: string) {
        
    }

    existsInToppings(topping: string):boolean {
        return this.selectedToppings && this.selectedToppings.includes(topping);
    }

}
