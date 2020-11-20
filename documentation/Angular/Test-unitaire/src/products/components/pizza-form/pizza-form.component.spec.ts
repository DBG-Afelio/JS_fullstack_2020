import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PizzaFormComponent } from './pizza-form.component';
import { By } from '@angular/platform-browser';
import { PizzaToppingsComponent } from '..';
import { Pizza } from '../../models/pizza.model';
import { SimpleChange } from '@angular/core';

/*
  Règles:
  - Le formulaire ne doit pas être valide si aucun nom n'a été entré
  - Le formulaire doit être valide si un nom est entré
  - Le bouton "create" doit être affiché s'il s'agit d'une création (pas d'ID)
  - Le bouton "update" doit être affiché s'il s'agit d'une modification (avec ID)
*/

describe('PizzaFormComponent', () => {
  let component: PizzaFormComponent;
  let fixture: ComponentFixture<PizzaFormComponent>;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[PizzaFormComponent, PizzaToppingsComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it ('should be ready', () => {
    console.log(component.test);
    expect(component.test).toBe(2);
  })

  it ('shouldn\'t be valid with empty name', () => {
    component.form.get('name').setValue('toto');
    component.form.get('name').setValue('');
    expect(component.form.valid).toBeFalsy();
  })
  
  it ('should be valid with non empty name', () => {
    component.form.get('name').setValue('toto');
    expect(component.form.valid).toBeTruthy();
  })
  
  it ('should create button be visible when add pizza', () => {
    component.pizza = {} as Pizza;
    component.ngOnChanges({pizza: new SimpleChange(null, component.pizza,false)});
    const create_button = fixture.debugElement.query(By.css('#create_button'));
    const update_button = fixture.debugElement.query(By.css('#update_button'));
    expect(create_button).not.toBeNull();
    expect(update_button).toBeNull();
  })


});
