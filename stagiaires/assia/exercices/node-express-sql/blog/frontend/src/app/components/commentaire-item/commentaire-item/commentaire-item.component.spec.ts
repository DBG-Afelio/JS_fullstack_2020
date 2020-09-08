import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireItemComponent } from './commentaire-item.component';

describe('CommentaireItemComponent', () => {
  let component: CommentaireItemComponent;
  let fixture: ComponentFixture<CommentaireItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentaireItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentaireItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
