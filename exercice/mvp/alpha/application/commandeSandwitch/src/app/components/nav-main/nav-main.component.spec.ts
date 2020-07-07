import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMainComponent } from './nav-main.component';

describe('NavMainComponent', () => {
  let component: NavMainComponent;
  let fixture: ComponentFixture<NavMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
