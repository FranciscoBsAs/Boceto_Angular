import { CanActivateFn } from '@angular/router';

export const firstExampleGuardGuard : CanActivateFn = (route, state) : boolean => {
  return false;
};
