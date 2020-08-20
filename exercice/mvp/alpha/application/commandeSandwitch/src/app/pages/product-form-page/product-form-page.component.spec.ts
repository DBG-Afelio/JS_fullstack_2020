import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormPageComponent } from './product-form-page.component';

describe('ProductFormPageComponent', () => {
  let component: ProductFormPageComponent;
  let fixture: ComponentFixture<ProductFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
