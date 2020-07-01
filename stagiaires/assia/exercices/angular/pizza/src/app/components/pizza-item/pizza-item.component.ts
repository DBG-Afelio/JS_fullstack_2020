import { Component, Input } from '@angular/core';

@Component({
    selector: 'pizza-item',
    styleUrls: ['pizza-item.component.scss'],
    templateUrl : './pizza-item.component.html'
})
export class PizzaItemComponent {
    @Input() pizza: any;
}
