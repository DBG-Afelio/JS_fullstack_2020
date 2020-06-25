import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeArticlesComponent } from './liste-articles.component';

describe('ListeArticlesComponent', () => {
  let component: ListeArticlesComponent;
  let fixture: ComponentFixture<ListeArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
