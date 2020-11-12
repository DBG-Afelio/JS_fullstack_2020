/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Timer2Component } from './timer2.component';

describe('Timer2Component', () => {
  let component: Timer2Component;
  let fixture: ComponentFixture<Timer2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Timer2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Timer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
