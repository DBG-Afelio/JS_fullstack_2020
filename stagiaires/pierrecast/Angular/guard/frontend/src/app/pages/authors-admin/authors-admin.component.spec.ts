import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsAdminComponent } from './authors-admin.component';

describe('AuthorsAdminComponent', () => {
  let component: AuthorsAdminComponent;
  let fixture: ComponentFixture<AuthorsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
