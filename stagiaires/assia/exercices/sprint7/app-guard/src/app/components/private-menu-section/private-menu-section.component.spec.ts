import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateMenuSectionComponent } from './private-menu-section.component';

describe('PrivateMenuSectionComponent', () => {
  let component: PrivateMenuSectionComponent;
  let fixture: ComponentFixture<PrivateMenuSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateMenuSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateMenuSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
