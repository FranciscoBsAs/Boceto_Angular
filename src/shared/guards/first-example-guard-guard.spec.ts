import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { firstExampleGuardGuard } from './first-example-guard-guard';

describe('firstExampleGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => firstExampleGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
