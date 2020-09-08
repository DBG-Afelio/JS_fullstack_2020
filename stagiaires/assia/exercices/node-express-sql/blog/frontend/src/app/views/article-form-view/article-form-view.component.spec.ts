import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFormViewComponent } from './article-form-view.component';

describe('ArticleFormViewComponent', () => {
  let component: ArticleFormViewComponent;
  let fixture: ComponentFixture<ArticleFormViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleFormViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
