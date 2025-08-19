import { CanActivateFn } from '@angular/router';

export const firstExampleGuardGuard : CanActivateFn = (route, state) : boolean => {

/*
  if( this.user.isLogged ) {
    return false
  }
  return true
*/

  return false;
};


/*
export const isAdminGuard : CanActivateFn = ( route, state ) : boolean => {

  // Check if the user is an admin
  if( this.user.role === 'admin' ) {
    return true
  }
  else{
    // Redirect to a not authorized page or home
    this.theRouter.navigate( [ '/not-authorized' ] )
    return false
  }

}

*/
