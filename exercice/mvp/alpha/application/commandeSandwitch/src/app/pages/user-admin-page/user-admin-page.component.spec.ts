import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminPageComponent } from './user-admin-page.component';

describe('UserAdminPageComponent', () => {
  let component: UserAdminPageComponent;
  let fixture: ComponentFixture<UserAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAdminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
