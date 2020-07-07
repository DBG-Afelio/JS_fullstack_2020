import { TestBed } from '@angular/core/testing';

import { ProvidersListService } from './providers-list.service';

describe('ProvidersListService', () => {
  let service: ProvidersListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvidersListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
