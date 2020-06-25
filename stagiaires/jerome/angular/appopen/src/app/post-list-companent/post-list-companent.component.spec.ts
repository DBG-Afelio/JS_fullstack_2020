import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListCompanentComponent } from './post-list-companent.component';

describe('PostListCompanentComponent', () => {
  let component: PostListCompanentComponent;
  let fixture: ComponentFixture<PostListCompanentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListCompanentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListCompanentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
