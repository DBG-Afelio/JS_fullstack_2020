import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersHistoryComponent } from './orders-history.component';

describe('OrdersHistoryComponent', () => {
  let component: OrdersHistoryComponent;
  let fixture: ComponentFixture<OrdersHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
