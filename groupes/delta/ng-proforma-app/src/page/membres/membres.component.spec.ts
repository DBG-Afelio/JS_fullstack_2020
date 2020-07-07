/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MembresComponent } from './membres.component';

describe('MembresComponent', () => {
  let component: MembresComponent;
  let fixture: ComponentFixture<MembresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
