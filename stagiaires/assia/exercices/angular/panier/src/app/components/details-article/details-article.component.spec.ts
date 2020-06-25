import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsArticleComponent } from './details-article.component';

describe('DetailsArticleComponent', () => {
  let component: DetailsArticleComponent;
  let fixture: ComponentFixture<DetailsArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
