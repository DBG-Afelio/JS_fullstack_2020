import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesAdminComponent } from './articles-admin.component';

describe('ArticlesAdminComponent', () => {
  let component: ArticlesAdminComponent;
  let fixture: ComponentFixture<ArticlesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
