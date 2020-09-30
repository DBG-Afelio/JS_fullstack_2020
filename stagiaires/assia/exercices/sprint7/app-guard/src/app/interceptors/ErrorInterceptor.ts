import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { AuthService } from '../services/auth.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
            return next.handle(req).pipe(
                catchError((err: HttpErrorResponse) => {
                    if (err.status === 401) {
                        this.authService.removeSessionUser();
                    //    location.reload();
                    }
                    const error = err.message || err.statusText;
                    return throwError(error);
                })
            )
        }
}