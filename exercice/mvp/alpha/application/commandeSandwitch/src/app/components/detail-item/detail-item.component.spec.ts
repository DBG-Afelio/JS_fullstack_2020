import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailItemComponent } from './detail-item.component';

describe('DetailItemComponent', () => {
  let component: DetailItemComponent;
  let fixture: ComponentFixture<DetailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
