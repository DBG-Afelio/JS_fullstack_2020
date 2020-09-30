import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

export class LoginInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('interceptor', req);
        const token = localStorage.getItem('token');
        if (token) {
            const cloneReq = req.clone({
                headers : new HttpHeaders().set('access_token', token)
            });
            return next.handle(cloneReq);
        } else {
            return next.handle(req);
        }
    }
}

export const LoginInterceptorProvider = {
    provide:  HTTP_INTERCEPTORS,
    useClass: LoginInterceptor,
    multi: true
}
