import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDisplayComponent } from './provider-display.component';

describe('ProviderDisplayComponent', () => {
  let component: ProviderDisplayComponent;
  let fixture: ComponentFixture<ProviderDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
