/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersonneService } from './personne.service';

describe('Service: Personne', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonneService]
    });
  });

  it('should ...', inject([PersonneService], (service: PersonneService) => {
    expect(service).toBeTruthy();
  }));
});
