import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { NgxsModule, Store } from '@ngxs/store';

import { ProductItemComponent } from './product-item.component';
import { PizzasState } from '../../store';
import { PizzasService, ToppingsService } from '../../services';
import { environment } from '../../../environments/environment';

/*
  Règles:
  - Mise à jour
    - La pizza correspondant à l'id contenu en paramètre de l'url doit être chargé en même temps que l'application
  - Création
    - Aucun appel serveur pour récupérer les pizzas ne doit être fait
*/

describe('ProductItemComponent (update)', () => {

});


describe('ProductItemComponent (new)', () => {

});
