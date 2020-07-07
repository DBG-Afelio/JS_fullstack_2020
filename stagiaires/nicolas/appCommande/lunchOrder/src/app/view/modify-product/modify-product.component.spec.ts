import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyProductComponent } from './modify-product.component';

describe('ModifyProductComponent', () => {
  let component: ModifyProductComponent;
  let fixture: ComponentFixture<ModifyProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
