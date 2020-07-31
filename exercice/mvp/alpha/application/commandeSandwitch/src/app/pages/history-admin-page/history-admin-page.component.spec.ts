import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryAdminPageComponent } from './history-admin-page.component';

describe('HistoryAdminPageComponent', () => {
  let component: HistoryAdminPageComponent;
  let fixture: ComponentFixture<HistoryAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryAdminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
