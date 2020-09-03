import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArticleViewComponent } from './single-article-view.component';

describe('SingleArticleViewComponent', () => {
  let component: SingleArticleViewComponent;
  let fixture: ComponentFixture<SingleArticleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleArticleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleArticleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
