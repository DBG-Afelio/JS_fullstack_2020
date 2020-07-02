import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';


import { Pizza } from '../../models/pizza.model';
import { ResourceLoader } from '@angular/compiler';

@Component({
    selector: 'pizza-form',
    styleUrls: ['pizza-form.component.scss'],
    templateUrl: './pizza-form.component.html'
})
export class PizzaFormComponent implements OnInit {

    @Input() pizza: Pizza; 
    @Input() toppings: string[];

  //  @Output() pizzaChangeEvent = new EventEmitter<Pizza>();
    @Output() createEvent = new EventEmitter<Pizza>();
    @Output() updateEvent = new EventEmitter<Pizza>();
    @Output() removeEvent = new EventEmitter<Pizza>();

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

    updateToppings(toppingsUp: string[]): void {
        this.pizza.toppings = toppingsUp;
        console.log(this.pizza.name.length);
    }

    updatePizza(pizza: Pizza): void{
        this.updateEvent.emit(pizza);
       
    }
    createPizza(pizza: Pizza): void{
        
        this.createEvent.emit(pizza);
    }
    removePizza(pizza: Pizza): void{
        const isRemoveConfirmed: boolean = window.confirm(`Etes-vous certain de vouloir supprimer la pizza ${pizza.name}`);
        if (isRemoveConfirmed) {
            this.removeEvent.emit(pizza);
        } 
    }

    addName(nameadded: string): void{
        this.pizza.name = nameadded;
        console.log('name :', this.pizza.name);
    }
}
