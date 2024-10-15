import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  const jwtToken = localStorage.getItem('jwt_token');
  if (jwtToken) {
    const cloneRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${jwtToken}`
      }
    });
    return next(cloneRequest);
  } else {
    return next(req);
  }
};
