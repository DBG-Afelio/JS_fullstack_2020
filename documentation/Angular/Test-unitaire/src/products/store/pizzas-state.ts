import { Pizza } from '../models/pizza.model';
import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';
import { PizzasService, ToppingsService } from '../services';
import { tap } from 'rxjs/operators';
import { PizzasAction } from './pizzas-actions';
import { Navigate } from '@ngxs/router-plugin';
import { patch, updateItem } from '@ngxs/store/operators';

export interface PizzasStateModel {
  pizzas: Pizza[];
  pizzasLoading: boolean;
  selectedPizza: Pizza;
  toppings: string[];
}

@State<PizzasStateModel>({
  name: 'pizzas',
  defaults: { pizzas: [], selectedPizza: null, toppings: [], pizzasLoading: false }
})
export class PizzasState implements NgxsOnInit {
  constructor(
    private pizzasService: PizzasService,
    private toppingsService: ToppingsService) {
  }

  @Selector()
  static pizzas(state: PizzasStateModel) {
    return state.pizzas;
  }

  @Selector()
  static toppings(state: PizzasStateModel) {
    return state.toppings;
  }

  @Selector()
  static selectedPizza(state: PizzasStateModel) {
    return state.selectedPizza;
  }

  @Selector()
  static pizzasLoading(state: PizzasStateModel) {
    return state.pizzasLoading;
  }

  ngxsOnInit(ctx: StateContext<PizzasStateModel>) {
    console.log('State initialized, now getting Toppings');
    ctx.dispatch(new PizzasAction.LoadToppings());
  }

  @Action(PizzasAction.LoadList)
  loadPizzas(ctx: StateContext<PizzasStateModel>) {
    ctx.patchState({ pizzasLoading: true });
    return this.pizzasService.getPizzas().pipe(
      tap(pizzas => {
        ctx.patchState({ pizzas, pizzasLoading: false });
      })
    );
  }

  @Action(PizzasAction.GetById)
  getPizza({ patchState }, action: PizzasAction.GetById) {
    if (action.id) {
      patchState({ pizzasLoading: true });
      return this.pizzasService.getPizzas().pipe(
        tap(pizzas => {
          patchState({ pizzasLoading: false, selectedPizza: pizzas.find(pizza => pizza.id === +action.id) });
        })
      );
    } else {
      patchState({ selectedPizza: {} });
    }
  }

  @Action(PizzasAction.LoadToppings)
  loadToppings({ patchState }) {
    return this.toppingsService.getToppings().pipe(
      tap(toppings => {
        patchState({ toppings });
      })
    );
  }

  @Action(PizzasAction.Add)
  addPizza(ctx: StateContext<PizzasStateModel>, action: PizzasAction.Add) {
    return this.pizzasService.createPizza(action.pizza).subscribe(pizza => {
      ctx.dispatch(new Navigate([`/products`]));
    });
  }

  @Action(PizzasAction.Update)
  updatePizza(ctx: StateContext<PizzasStateModel>, action: PizzasAction.Update) {
    ctx.setState(
      patch({
        pizzas: updateItem<Pizza>(pizza => pizza.id === action.pizza.id, action.pizza)
      })
    );
    return this.pizzasService.updatePizza(action.pizza).subscribe(() => {
      ctx.dispatch(new Navigate([`/products`]));
    });
  }

  @Action(PizzasAction.Delete)
  deletePizza(ctx: StateContext<PizzasStateModel>, action: PizzasAction.Delete) {
    const state = ctx.getState();
    const remove = window.confirm('Are you sure?');
    if (remove) {
      ctx.setState(
        patch({
          pizzas: state.pizzas.filter(pizza => pizza.id !== action.pizza.id)
        })
      );
      return this.pizzasService.removePizza(action.pizza).subscribe(() => {
        ctx.dispatch(new Navigate([`/products`]));
      });
    }
  }

  @Action(PizzasAction.Edit)
  editSelectedPizza({ patchState }, action: PizzasAction.Edit) {
    patchState({ selectedPizza: action.pizza });
  }
}
