import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePanierComponent } from './resume-panier.component';

describe('ResumePanierComponent', () => {
  let component: ResumePanierComponent;
  let fixture: ComponentFixture<ResumePanierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumePanierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
