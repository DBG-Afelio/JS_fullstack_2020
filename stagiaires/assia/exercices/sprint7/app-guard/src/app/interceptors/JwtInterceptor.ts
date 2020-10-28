import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Intercepts All except /auth/sign-in and /auth/sign-up

    let urlExclude = ['sign-up', 'sign-in'];
    if (!urlExclude.find(v => req.url.includes(v))) {
      console.log('intercepted ----------', req.url);
      //retrieve token if any, from sessionStorage
      let sessionToken = sessionStorage.getItem('userToken');

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


