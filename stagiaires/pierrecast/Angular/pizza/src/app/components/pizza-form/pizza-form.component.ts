import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';


import { Pizza } from '../../models/pizza.model';

@Component({
    selector: 'pizza-form',
    styleUrls: ['pizza-form.component.scss'],
    templateUrl: './pizza-form.component.html'
})
export class PizzaFormComponent implements OnInit {

    @Input() pizza: Pizza;
    @Input() toppings: string[];

    @Output() name = new EventEmitter<Pizza>();
    @Output() create = new EventEmitter<Pizza>();
    @Output() update = new EventEmitter<Pizza>();
    @Output() remove = new EventEmitter<Pizza>();

    constructor() { 
    }

    public updateToppingsEvent(selectedTopppings: string[]) {
       this.pizza.toppings = selectedTopppings;
    }

    public createPizza() {
        if (this.pizza.name !== '') {
            this.create.emit(this.pizza);
        } 
    }

    public saveChanges() {
        this.update.emit(this.pizza);
    }

    public deletePizza() {
        if (this.pizza.id !== 0 && window.confirm('Etes-vous sûr de vouloir supprimer cette pizza ?')) {
            this.remove.emit(this.pizza);
        }
    }

    public changeName(name: string) {
        this.pizza.name = name;
    }

    public updateFavorite() {
        this.pizza.favorite = (this.pizza.favorite) ? false : true;
    }

    ngOnInit() {
    }
}
