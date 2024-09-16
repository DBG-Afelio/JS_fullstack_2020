/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FournService } from './fourn.service';

describe('Service: Fourn', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FournService]
    });
  });

  it('should ...', inject([FournService], (service: FournService) => {
    expect(service).toBeTruthy();
  }));
});
