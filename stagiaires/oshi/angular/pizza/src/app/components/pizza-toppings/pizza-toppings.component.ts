import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pizza-toppings',
    styleUrls: ['pizza-toppings.component.scss'],
    templateUrl: './pizza-toppings.component.html'
})
export class PizzaToppingsComponent {
    @Input() toppings: string[] = []; //tous les toppings existants

    @Output() toppingsChange: EventEmitter<string[]>= new EventEmitter(); //emeteur quand on change les toppings sélectionnés 

    @Input() selected_toppings: string[] = []; // toppings sélectionnés

    constructor() { }

    selectTopping(topping: string) {
        if(this.existsInToppings(topping)) {
            this.selected_toppings.splice(
                this.selected_toppings.findIndex(e => e === topping),
                1
            )
        } else {
            this.selected_toppings.push(topping)
        }
        this.toppingsChange.emit(this.selected_toppings);
    }

    existsInToppings(topping: string): boolean {
        return this.selected_toppings && this.selected_toppings.includes(topping);
    }
}
