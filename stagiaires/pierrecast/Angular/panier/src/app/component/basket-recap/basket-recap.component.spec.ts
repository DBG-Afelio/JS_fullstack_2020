import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketRecapComponent } from './basket-recap.component';

describe('BasketRecapComponent', () => {
  let component: BasketRecapComponent;
  let fixture: ComponentFixture<BasketRecapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketRecapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
