import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { map, takeUntil } from 'rxjs/operators';

import { Pizza } from '../../models/pizza.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'pizza-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['pizza-form.component.scss'],
  template: `
    <div class="pizza-form">
      <form [formGroup]="form">

        <label>
          <h4>Pizza name</h4>
          <input
            type="text"
            formControlName="name"
            placeholder="e.g. Pepperoni"
            class="pizza-form__input"
            [class.error]="nameControlInvalid">
          <div
            class="pizza-form__error"
            *ngIf="nameControlInvalid">
            <p>Pizza must have a name</p>
          </div>
        </label>

        <ng-content></ng-content>

        <label>
          <h4>Select toppings</h4>
        </label>
        <div class="pizza-form__list">

          <pizza-toppings
            [toppings]="toppings"
            formControlName="toppings">
          </pizza-toppings>

        </div>

        <div class="pizza-form__actions">
          <button
            id="create_button"
            type="button"
            class="btn btn__ok"
            *ngIf="!(exists | async)"
            (click)="createPizza(form)">
            Create Pizza
          </button>

          <ng-container *ngIf="exists | async">
            <button
              id="update_button"
              type="button"
              class="btn btn__ok"
              (click)="updatePizza(form)">
              Save changes
            </button>

            <button
              type="button"
              class="btn btn__warning"
              (click)="removePizza(form)">
              Delete Pizza
            </button>
          </ng-container>
        </div>

      </form>
    </div>
  `,
})
export class PizzaFormComponent implements OnInit, OnChanges, OnDestroy {
  exists = new BehaviorSubject<boolean>(false);

  @Input() pizza: Pizza;
  @Input() toppings: string[];

  @Output() selected = new EventEmitter<Pizza>();
  @Output() create = new EventEmitter<Pizza>();
  @Output() update = new EventEmitter<Pizza>();
  @Output() remove = new EventEmitter<Pizza>();

  form = this.fb.group({
    name: ['', Validators.required],
    toppings: [[]],
    sizes: [[]],
  });

  private destroyObservables = new Subject();

  constructor(private fb: FormBuilder) {}

  get nameControl() {
    return this.form.get('name') as FormControl;
  }

  get nameControlInvalid() {
    return this.nameControl.hasError('required') && this.nameControl.touched;
  }

  ngOnInit() {
    this.form
      .get('toppings')
      .valueChanges.pipe(
        map(toppings => ({ ...this.pizza, toppings })),
        takeUntil(this.destroyObservables)
      )
      .subscribe(value => this.selected.emit(value));
      console.log('init');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.pizza && this.pizza && this.pizza.id) {
      this.exists.next(true);
      this.form.patchValue(this.pizza, {emitEvent: false, onlySelf: true});
    }
  }

  ngOnDestroy() {
    this.destroyObservables.next();
    console.log('destroy');
  }

  createPizza(form: FormGroup) {
    const { value, valid } = form;
    if (valid) {
      this.create.emit(value);
    }
  }

  updatePizza(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.pizza, ...value });
    }
  }

  removePizza(form: FormGroup) {
    const { value } = form;
    this.remove.emit({ ...this.pizza, ...value });
  }
}
