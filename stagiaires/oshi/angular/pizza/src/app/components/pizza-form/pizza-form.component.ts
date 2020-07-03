import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    OnChanges
} from '@angular/core';


import { Pizza } from '../../models/pizza.model';

@Component({
    selector: 'pizza-form',
    styleUrls: ['pizza-form.component.scss'],
    templateUrl: './pizza-form.component.html'
})
export class PizzaFormComponent implements OnInit, OnChanges {
    @Input() pizza: Pizza;
    @Input() toppings: string[];
    input_error: boolean = true;

    @Output() selected = new EventEmitter<Pizza>();
    @Output() create = new EventEmitter<Pizza>();
    @Output() update = new EventEmitter<Pizza>();
    @Output() remove = new EventEmitter<Pizza>();

/**
 * classe gérant les actions sur le formulaire de création/modification de pizza
 * doit assurer que le nom de la pizza n'est pas vide 
 * doit emettre l'action à réaliser à la page (container)
 * le delete ne peut se faire que sur une pizza existante et demander une confirmation (window.confirm)
 */

    constructor() { 
    }

    ngOnInit() {
    }

    ngOnChanges() {
        if(!this.pizza?.id as boolean) {
            
        } else {
            this.input_error = false;
        }
    }

    selectTopping(select_toppings: string[]): void {
        this.pizza.toppings = select_toppings;
    }

    inputNameEvent(value: string) {
        this.input_error = !value.length;
        this.pizza.name = value;
    }

    createPizza() {
        this.create.emit(this.pizza);
    }

    updatePizza() {
        this.update.emit(this.pizza);
    }

    removePizza() {
        this.remove.emit(this.pizza);
    }
}
