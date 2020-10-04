import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Intercepts All except /auth/sign-in and /auth/sign-up
    if (!req.url.includes('auth')) {
      console.log('intercepted ----------');
      //retrieve token if any, from sessionStorage
      let sessionToken = this.authService.currentUsertoken.getValue();

      if (sessionToken) {
        //if so, add authorization header with jwt token
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${sessionToken}`,
          },
        });

      }
    } 

    return next.handle(req);
  }
}
