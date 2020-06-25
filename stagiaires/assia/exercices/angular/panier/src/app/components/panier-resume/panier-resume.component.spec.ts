import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierResumeComponent } from './panier-resume.component';

describe('PanierResumeComponent', () => {
  let component: PanierResumeComponent;
  let fixture: ComponentFixture<PanierResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
