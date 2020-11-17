import { Pizza } from '../models/pizza.model';

export namespace PizzasAction {

  export class LoadList {
    static readonly type = '[Pizzas] Load the list of pizzas';
  }

  export class Add {
    static readonly type = '[Pizzas] Add a pizza';

    constructor(public pizza: Pizza) {
    }
  }

  export class GetById {
    static readonly type = '[Pizzas] Get a pizza';

    constructor(public id: number) {
    }
  }

  export class LoadToppings {
    static readonly type = '[Pizzas] Get toppings';
  }

  export class Delete {
    static readonly type = '[Pizzas] Delete a pizza';

    constructor(public pizza: Pizza) {
    }
  }

  export class Update {
    static readonly type = '[Pizzas] Update a pizza';

    constructor(public pizza: Pizza) {
    }
  }

  export class Edit {
    static readonly type = '[Pizzas] Update current pizza';

    constructor(public pizza: Pizza) {

    }
  }
}
