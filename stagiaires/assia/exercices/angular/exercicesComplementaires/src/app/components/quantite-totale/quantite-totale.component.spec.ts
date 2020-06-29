import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantiteTotaleComponent } from './quantite-totale.component';

describe('QuantiteTotaleComponent', () => {
  let component: QuantiteTotaleComponent;
  let fixture: ComponentFixture<QuantiteTotaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantiteTotaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantiteTotaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
