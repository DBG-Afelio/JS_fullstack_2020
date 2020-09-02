import { TestBed } from '@angular/core/testing';

import { CommentairesService } from './commentaires.service';

describe('CommentairesService', () => {
  let service: CommentairesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentairesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
