import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { NgxsModule, Store } from '@ngxs/store';

import { environment } from '../../environments/environment';
import { PizzasState, PizzasStateModel } from './pizzas-state';
import { PizzasAction } from './pizzas-actions';
import { PizzasService, ToppingsService } from '../services';

/*
  Règles:
  - Le store doit automatiquement charger la liste des toppings
  - Si l'utilisateur répond "oui" à la fenètre de confirmation, une requête de suppression au serveur doit être effectuée
  - Si l'utilisateur répond "non" à la fenètre de confirmation, aucune requête de suppression au serveur ne doit être effectuée
  - S'il y a une demande de mise à jour, une requête serveur de mise à jour doit être effectuée
  - S'il y a une demande de création, une requête serveur de création doit être effectuée
*/

describe('Pizza Store', () => {

});
