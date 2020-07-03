import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
    selector: 'pizza-item',
    styleUrls: ['pizza-item.component.scss'],
    templateUrl : './pizza-item.component.html'
})
export class PizzaItemComponent {
    @Input() pizza: any;
    @Input() user: User;
}
