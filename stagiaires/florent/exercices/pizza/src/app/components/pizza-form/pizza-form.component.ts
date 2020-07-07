import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';


import { Pizza } from '../../models/pizza.model';
import { ActivatedRoute } from '@angular/router';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
    selector: 'pizza-form',
    styleUrls: ['pizza-form.component.scss'],
    templateUrl: './pizza-form.component.html'
})
export class PizzaFormComponent implements OnInit {

    selectedtoppings: string[];
    input_error: boolean;

    @Input() pizza: Pizza;
    @Input() toppings: string[];

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

    newToppings(toppings: string[]): void{
        this.pizza.toppings = toppings;
    }

    inputError(inputvalue: String): void{
        this.input_error = inputvalue.length === 0;
    }

    
}
