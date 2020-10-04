import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        switch (err.status) {
          case 401: {
            // unauthorized
            this.authService.removeSessionUser();
            this.router.navigate(['/authentication/signin']);
            this.openSnackBar('Wrong login/password ');
            break;
          }
          case 403: {
            // forbidden
            // do smtg ?
            this.openSnackBar(
              'Sorry, you are not allowed to perform this action'
            );
            break;
          }
          default: {
            break;
          }
        }
        const error = err.message || err.statusText;
        return throwError(error);
      }),
      tap((res: any) => {
        //ß  console.log('-----response : ', res);
        if (res instanceof HttpResponse && res.ok && res.body.message) {
          this.openSnackBar(res.body.message);
        }
      })
    );
  }

  public openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
