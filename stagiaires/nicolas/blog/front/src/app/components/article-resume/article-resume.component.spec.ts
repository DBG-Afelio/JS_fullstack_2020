import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleResumeComponent } from './article-resume.component';

describe('ArticleResumeComponent', () => {
  let component: ArticleResumeComponent;
  let fixture: ComponentFixture<ArticleResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
