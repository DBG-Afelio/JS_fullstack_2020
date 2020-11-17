import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Select, Store } from '@ngxs/store';

import { Pizza } from '../../models/pizza.model';
import { PizzasState, PizzasAction } from '../../store';

@Component({
  selector: 'product-item',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['product-item.component.scss'],
  template: `
    <div
      class="product-item">
      <pizza-form
        [pizza]="pizza$ | async"
        [toppings]="toppings$ | async"
        (selected)="onSelect($event)"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (remove)="onRemove($event)">
        <pizza-display
          [pizza]="pizza$ | async">
        </pizza-display>
      </pizza-form>
    </div>
  `,
})
export class ProductItemComponent implements OnInit {

  // @Select(PizzasState.pizzasLoading)
  // public loading$: Observable<boolean>;

  @Select(PizzasState.selectedPizza)
  pizza$: Observable<Pizza>;

  @Select(PizzasState.toppings)
  toppings$: Observable<string[]>;

  constructor(
    private route: ActivatedRoute,
    private  store: Store
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.store.dispatch(new PizzasAction.GetById(params['id'] !== 'new' ?  parseInt(params['id'], 10) : null));
    });
  }

  onSelect(event: Pizza) {
    this.store.dispatch(new PizzasAction.Edit(event));
  }

  onCreate(event: Pizza) {
    this.store.dispatch(new PizzasAction.Add(event));
  }

  onUpdate(event: Pizza) {
    this.store.dispatch(new PizzasAction.Update(event));
  }

  onRemove(event: Pizza) {
    this.store.dispatch(new PizzasAction.Delete(event));
  }
}
