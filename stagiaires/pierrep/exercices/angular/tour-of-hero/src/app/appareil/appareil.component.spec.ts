import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareilComponent } from './appareil.component';

describe('AppareilComponent', () => {
  let component: AppareilComponent;
  let fixture: ComponentFixture<AppareilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppareilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
