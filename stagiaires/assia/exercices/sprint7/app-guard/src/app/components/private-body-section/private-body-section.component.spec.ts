import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateBodySectionComponent } from './private-body-section.component';

describe('PrivateBodySectionComponent', () => {
  let component: PrivateBodySectionComponent;
  let fixture: ComponentFixture<PrivateBodySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateBodySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateBodySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
