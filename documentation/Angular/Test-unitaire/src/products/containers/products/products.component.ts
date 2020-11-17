import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Pizza } from '../../models/pizza.model';
import { PizzasService } from '../../services/pizzas.service';

import * as fromStore from '../../store';
import { Store, Select } from '@ngxs/store';
import { PizzasAction, PizzasState } from '../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'products',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['products.component.scss'],
  template: `
    <div class="products" *ngIf="(pizzas$ | async) as pizzas">
      <div class="products__new">
        <a
          class="btn btn__ok"
          routerLink="./new">
          New Pizza
        </a>
      </div>
      <div class="products__list">
        <div *ngIf="!((pizzas)?.length)">
          No pizzas, add one to get started.
        </div>
        <pizza-item
          *ngFor="let pizza of (pizzas)"
          [pizza]="pizza">
        </pizza-item>
      </div>
    </div>
  `,
})
export class ProductsComponent implements OnInit {

  @Select(PizzasState.pizzas)
  public pizzas$: Observable<Pizza[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new PizzasAction.LoadList());
  }
}
