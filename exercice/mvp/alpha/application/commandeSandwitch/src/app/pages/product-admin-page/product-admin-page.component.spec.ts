import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdminPageComponent } from './product-admin-page.component';

describe('ProductAdminPageComponent', () => {
  let component: ProductAdminPageComponent;
  let fixture: ComponentFixture<ProductAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAdminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
