import { TestBed } from '@angular/core/testing';

import { LoginValidatorService } from './login-validator.service';

describe('LoginValidatorService', () => {
  let service: LoginValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
