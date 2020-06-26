import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPanierComponent } from './detail-panier.component';

describe('DetailPanierComponent', () => {
  let component: DetailPanierComponent;
  let fixture: ComponentFixture<DetailPanierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPanierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
