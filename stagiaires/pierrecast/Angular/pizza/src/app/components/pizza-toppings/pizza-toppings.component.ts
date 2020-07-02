import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pizza-toppings',
    styleUrls: ['pizza-toppings.component.scss'],
    templateUrl: './pizza-toppings.component.html'
})
export class PizzaToppingsComponent {
    @Input() toppings: string[] = []; //tous les toppings existants
    @Input() value: string[] = []; // toppings sélectionnés

    @Output() toppingsChange: EventEmitter<string[]>= new EventEmitter(); //emetteur quand on change les toppings sélectionnés 

    constructor() { }

    public selectTopping(topping: string) {
        if (this.existsInToppings(topping)) {
            this.value = this.value.filter(item => item !== topping);
        } else {
            this.value.push(topping);
        }
        this.toppingsChange.emit(this.value);
    }

    public existsInToppings(topping: string) :boolean {
        return this.value && this.value.includes(topping);
    }
}
