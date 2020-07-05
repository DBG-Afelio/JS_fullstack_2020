/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MastermaindComponent } from './mastermaind.component';

describe('MastermaindComponent', () => {
  let component: MastermaindComponent;
  let fixture: ComponentFixture<MastermaindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastermaindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastermaindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
