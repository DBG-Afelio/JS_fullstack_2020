/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SuppliersService } from './suppliers.service';

describe('Service: Suppliers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuppliersService]
    });
  });

  it('should ...', inject([SuppliersService], (service: SuppliersService) => {
    expect(service).toBeTruthy();
  }));
});
