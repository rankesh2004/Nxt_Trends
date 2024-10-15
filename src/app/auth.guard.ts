import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  
  const isAuthenticated = !!localStorage.getItem('jwt_token');
  
  if (isAuthenticated) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
