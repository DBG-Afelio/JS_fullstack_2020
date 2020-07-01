import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketSummaryComponent } from './basket-summary.component';

describe('BasketSummaryComponent', () => {
  let component: BasketSummaryComponent;
  let fixture: ComponentFixture<BasketSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
