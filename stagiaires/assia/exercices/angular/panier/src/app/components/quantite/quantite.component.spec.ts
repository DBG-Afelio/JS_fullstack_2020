import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantiteComponent } from './quantite.component';

describe('QuantiteComponent', () => {
  let component: QuantiteComponent;
  let fixture: ComponentFixture<QuantiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
