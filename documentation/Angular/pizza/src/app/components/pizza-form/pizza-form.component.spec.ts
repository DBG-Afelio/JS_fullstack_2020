import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PizzaFormComponent } from './pizza-form.component';
import { By } from '@angular/platform-browser';
import { PizzaToppingsComponent } from '..';
import { Pizza } from '../../models/pizza.model';

/*
  Règles:
  - Le formulaire ne doit pas être valide si aucun nom n'a été entré
  - Le formulaire doit être valide si un nom est entré
  - Le bouton "create" doit être affiché s'il s'agit d'une création (pas d'ID)
  - Le bouton "update" doit être affiché s'il s'agit d'une modification (avec ID)
*/

describe('PizzaFormComponent', () => {

});
