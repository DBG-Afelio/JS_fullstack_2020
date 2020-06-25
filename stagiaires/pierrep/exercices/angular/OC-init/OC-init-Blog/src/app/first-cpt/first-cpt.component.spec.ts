import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCptComponent } from './first-cpt.component';

describe('FirstCptComponent', () => {
  let component: FirstCptComponent;
  let fixture: ComponentFixture<FirstCptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstCptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
