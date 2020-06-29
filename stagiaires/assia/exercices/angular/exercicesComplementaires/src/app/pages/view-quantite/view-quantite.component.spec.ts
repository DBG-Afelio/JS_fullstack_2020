import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuantiteComponent } from './view-quantite.component';

describe('ViewQuantiteComponent', () => {
  let component: ViewQuantiteComponent;
  let fixture: ComponentFixture<ViewQuantiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewQuantiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQuantiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
