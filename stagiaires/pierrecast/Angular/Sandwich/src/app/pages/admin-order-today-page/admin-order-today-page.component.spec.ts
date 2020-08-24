import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderTodayPageComponent } from './admin-order-today-page.component';

describe('AdminOrderTodayPageComponent', () => {
  let component: AdminOrderTodayPageComponent;
  let fixture: ComponentFixture<AdminOrderTodayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOrderTodayPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderTodayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
