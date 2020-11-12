/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChronoComponent } from './chrono.component';

describe('ChronoComponent', () => {
  let component: ChronoComponent;
  let fixture: ComponentFixture<ChronoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChronoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChronoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
