/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserServiceService } from './user-service.service';

describe('Service: UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserServiceService]
    });
  });

  it('should ...', inject([UserServiceService], (service: UserServiceService) => {
    expect(service).toBeTruthy();
  }));
});
