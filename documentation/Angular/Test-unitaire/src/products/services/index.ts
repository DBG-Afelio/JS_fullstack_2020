import { PizzasService } from './pizzas.service';
import { ToppingsService } from './toppings.service';
import { RomanizeService } from './romanize.service';

export const services: any[] = [
  PizzasService,
  ToppingsService,
  RomanizeService
];

export * from './pizzas.service';
export * from './toppings.service';
export * from './romanize.service';
