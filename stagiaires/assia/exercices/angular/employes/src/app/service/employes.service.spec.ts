import { TestBed } from '@angular/core/testing';

import { EmployesService } from './employes.service';

describe('EmployesService', () => {
  let service: EmployesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
