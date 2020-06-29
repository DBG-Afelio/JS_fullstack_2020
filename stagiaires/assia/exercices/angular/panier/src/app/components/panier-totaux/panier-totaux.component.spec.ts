import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierTotauxComponent } from './panier-totaux.component';

describe('PanierTotauxComponent', () => {
  let component: PanierTotauxComponent;
  let fixture: ComponentFixture<PanierTotauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierTotauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierTotauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
