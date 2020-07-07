import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pizza-toppings',
    styleUrls: ['pizza-toppings.component.scss'],
    templateUrl: './pizza-toppings.component.html'
})
export class PizzaToppingsComponent {
    public toppingselected: boolean;

    @Input() toppings: string[] = []; //tous les toppings existants

    @Output() toppingsChange: EventEmitter<string[]>= new EventEmitter(); //emeteur quand on change les toppings sélectionnés 

    @Input() value: string[] = []; // toppings sélectionnés

    constructor() { }

    selectTopping(topping: string) {
        
        if (this.existsInToppings(topping)) {
            this.value.splice(this.value.findIndex(e => e === topping), 1);
        } else {
            this.value.push(topping);
        }
        this.toppingsChange.emit(this.value);
        
    }

    existsInToppings(topping: string): boolean {
        return this.value && this.value.includes(topping);
    }

    ngOnInit(){
        
    }
}
