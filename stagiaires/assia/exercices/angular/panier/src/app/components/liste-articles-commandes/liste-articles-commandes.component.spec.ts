import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeArticlesCommandesComponent } from './liste-articles-commandes.component';

describe('ListeArticlesCommandesComponent', () => {
  let component: ListeArticlesCommandesComponent;
  let fixture: ComponentFixture<ListeArticlesCommandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeArticlesCommandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeArticlesCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
