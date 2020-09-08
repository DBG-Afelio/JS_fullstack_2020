import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pizza-toppings',
    styleUrls: ['pizza-toppings.component.scss'],
    templateUrl: './pizza-toppings.component.html'
})
export class PizzaToppingsComponent {
    @Input() toppings: string[]; //tous les toppings existants
    @Input() selectedToppings: string[]; // toppings sélectionnés
    @Output() toppingsChangeEvent: EventEmitter<string[]>= new EventEmitter(); //emeteur quand on change les toppings sélectionnés 

    constructor() { }

    selectTopping(toppingSelect: string) {
        if (!this.existsInToppings(toppingSelect)) {
            this.selectedToppings.push(toppingSelect);   
        } else {
            const index: number = this.selectedToppings.findIndex((toppingRemove) => toppingRemove === toppingSelect);
            this.selectedToppings.splice(index, 1);
        }
        this.toppingsChangeEvent.emit(this.selectedToppings);
    }

    existsInToppings(topping: string):boolean {
        return this.selectedToppings && this.selectedToppings.includes(topping);
    }

}
