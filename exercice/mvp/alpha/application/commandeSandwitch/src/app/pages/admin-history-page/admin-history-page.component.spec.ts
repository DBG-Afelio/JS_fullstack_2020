import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHistoryPageComponent } from './admin-history-page.component';

describe('AdminHistoryPageComponent', () => {
  let component: AdminHistoryPageComponent;
  let fixture: ComponentFixture<AdminHistoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHistoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
