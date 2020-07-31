import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationFormComponent } from './authentication-form.component';

describe('AuthenticationFormComponent', () => {
  let component: AuthenticationFormComponent;
  let fixture: ComponentFixture<AuthenticationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
