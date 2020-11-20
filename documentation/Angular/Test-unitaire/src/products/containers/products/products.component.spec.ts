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
import { of } from 'rxjs';

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

fdescribe('ProductsComponent', () => {
  let fixture: ComponentFixture<ProductsComponent>;
  let service: PizzasService;
  let component: ProductsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [HttpClientTestingModule],
      providers:[PizzasService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    service = TestBed.get(PizzasService);
    component = fixture.componentInstance;
  })

  it('should create',() => {
    expect(true).toBeTruthy();
  })

  it('should call getPizza', () => {
    const spy = spyOn(service, 'getPizzas');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith();
  
  })

  it('should be empty', () => {
    const spy = spyOn(service, 'getPizzas').and.returnValue(of([]));
    fixture.detectChanges();
 
    const noPizzaDiv = fixture.debugElement.query(By.css('[data-test="no-pizzas"]'));
    console.log(noPizzaDiv);
    
    expect(noPizzaDiv).not.toBeNull()
    
  })
});
