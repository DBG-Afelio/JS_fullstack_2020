import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetArticleComponent } from './set-article.component';

describe('SetArticleComponent', () => {
  let component: SetArticleComponent;
  let fixture: ComponentFixture<SetArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
