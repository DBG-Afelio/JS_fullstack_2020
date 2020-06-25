import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierPageComponent } from './panier-page.component';

describe('PanierPageComponent', () => {
  let component: PanierPageComponent;
  let fixture: ComponentFixture<PanierPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
