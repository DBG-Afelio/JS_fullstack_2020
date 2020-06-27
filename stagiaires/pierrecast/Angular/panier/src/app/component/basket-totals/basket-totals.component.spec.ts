import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketTotalsComponent } from './basket-totals.component';

describe('BasketTotalsComponent', () => {
  let component: BasketTotalsComponent;
  let fixture: ComponentFixture<BasketTotalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketTotalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
