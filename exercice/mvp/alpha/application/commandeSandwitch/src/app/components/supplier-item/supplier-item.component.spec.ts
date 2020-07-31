import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierItemComponent } from './supplier-item.component';

describe('SupplierItemComponent', () => {
  let component: SupplierItemComponent;
  let fixture: ComponentFixture<SupplierItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
