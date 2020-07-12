import { TestBed } from '@angular/core/testing';

import { LoggedInOnlyGuard } from './logged-in-only.guard';

describe('LoggedInOnlyGuard', () => {
  let guard: LoggedInOnlyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggedInOnlyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
