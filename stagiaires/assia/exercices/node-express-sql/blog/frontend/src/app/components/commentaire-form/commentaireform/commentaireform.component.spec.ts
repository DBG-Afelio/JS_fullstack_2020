import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireformComponent } from './commentaireform.component';

describe('CommentaireformComponent', () => {
  let component: CommentaireformComponent;
  let fixture: ComponentFixture<CommentaireformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentaireformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentaireformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
