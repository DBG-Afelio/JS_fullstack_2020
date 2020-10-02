import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('interceptor', req);
        const token = localStorage.getItem('token');
        
        if (token) {
            const cloneReq = req.clone({
                setHeaders : { Authorization: 'Bearer ' + token}
            });
          
            return next.handle(cloneReq).pipe(
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401) {
                        this.router.navigateByUrl('/sign-in')
                    } else {
                        return throwError(error);
                    }
                })
            );

        } else {
            return next.handle(req);
        }
    }

    constructor(private router: Router) {}
}

export const LoginInterceptorProvider = {
    provide:  HTTP_INTERCEPTORS,
    useClass: LoginInterceptor,
    multi: true
}
