import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';

@Component({
    selector: 'pizza-item',
    styleUrls: ['pizza-item.component.scss'],
    templateUrl : './pizza-item.component.html'
})
export class PizzaItemComponent {
    @Input() pizza: any;

    @Output() remove = new EventEmitter<Pizza>();

    deletePizza(){

        let confirmDelete = confirm("Etes-vous sur de vouloir supprimer la pizza ???");
        if(confirmDelete){

            this.remove.emit(this.pizza);

        }

    }
}
