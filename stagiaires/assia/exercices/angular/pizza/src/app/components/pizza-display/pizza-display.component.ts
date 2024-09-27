import { Component, Input } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';

import { Pizza } from '../../models/pizza.model';

export const DROP_ANIMATION = trigger('drop', [
  transition(':enter', [
    style({ transform: 'translateY(-200px)', opacity: 0 }),
    animate(
      '300ms cubic-bezier(1.000, 0.000, 0.000, 1.000)',
      style({ transform: 'translateY(0)', opacity: 1 })
    ),
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0)', opacity: 1 }),
    animate(
      '200ms cubic-bezier(1.000, 0.000, 0.000, 1.000)',
      style({ transform: 'translateY(-200px)', opacity: 0 })
    ),
  ]),
]);

@Component({
  selector: 'pizza-display',
  animations: [DROP_ANIMATION],
  styleUrls: ['pizza-display.component.scss'],
  templateUrl: './pizza-display.component.html'
})
export class PizzaDisplayComponent {
  @Input() pizza: Pizza;
}
