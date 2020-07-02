import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';


import { Pizza } from '../../models/pizza.model';
import { Router } from '@angular/router';

@Component({
    selector: 'pizza-form',
    styleUrls: ['pizza-form.component.scss'],
    templateUrl: './pizza-form.component.html'
})
export class PizzaFormComponent implements OnInit {

    @Input() pizza: Pizza;
    @Input() toppings: string[];
    @Input() mode: string;

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

    constructor(private router : Router) { 
    }

    ngOnInit() {
        console.log(this.toppings)
    }
    isNewPizza():boolean{
   
        return this.mode === "create"
        

    }
    onClickCreateButton():void{

        if(this.pizza.name != ''){

                this.create.emit(this.pizza);
            
        }else{

            window.alert('Veuillez donner un nom à votre pizza')

        }
    }
    onClickUpdateButton():void{

        if(this.pizza.name != ''){
            

                this.update.emit(this.pizza);
            
        }else{

            window.alert('Veuillez donner un nom à votre pizza')

        }
        

    }
    onClickDeleteButton():void{

        let confirmDelete = confirm(`Voulez-vous supprimer cette pizza ? :\n\n\t<< ${this.pizza.name} >>`);
        if(confirmDelete){

            this.remove.emit(this.pizza);

        }
    }
    onClickReturnButton(){

        let confirmReturn = confirm("Quitter sans sauvegarder ?");
        if(confirmReturn){

            this.router.navigate(['']);

        }
        

    }
    updatePizzaName(newName:string){

        this.pizza.name = newName;

    }
    updatePizzaToppings(newToppings:string[]){

        this.pizza.toppings = newToppings;

    }
}
