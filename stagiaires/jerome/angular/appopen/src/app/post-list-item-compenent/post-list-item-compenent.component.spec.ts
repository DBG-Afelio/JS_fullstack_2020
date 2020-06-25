import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListItemCompenentComponent } from './post-list-item-compenent.component';

describe('PostListItemCompenentComponent', () => {
  let component: PostListItemCompenentComponent;
  let fixture: ComponentFixture<PostListItemCompenentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListItemCompenentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListItemCompenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
