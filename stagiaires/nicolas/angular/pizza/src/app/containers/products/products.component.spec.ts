import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { cold, getTestScheduler } from 'jasmine-marbles';

import { NgxsModule, Store } from '@ngxs/store';

import { PizzasService, ToppingsService } from '../../services';
import { PizzasState } from '../../store';
import { ROUTES } from '../../../app/app.module';
import { AppComponent } from '../../../app/containers/app/app.component';
import { environment } from '../../../environments/environment';
import { By } from '@angular/platform-browser';
import { Pizza } from '../../models/pizza.model';
import { ProductsComponent } from './products.component';

/*
  Règles:
  - Une navigation vers le détail d'une pizza doit être effectuée au click sur celle-ci
*/

describe('Routing', () => {

});

/*
  Règles:
  - Aucun item de doit apparaitre tant que le service n'a pas répondu
*/

describe('ProductsComponent', () => {

});
