import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EShopPageComponent } from './e-shop-page.component';

describe('EShopPageComponent', () => {
  let component: EShopPageComponent;
  let fixture: ComponentFixture<EShopPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EShopPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EShopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
