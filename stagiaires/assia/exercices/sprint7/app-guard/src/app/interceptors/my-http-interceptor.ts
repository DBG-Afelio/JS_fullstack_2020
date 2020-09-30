import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
//import { catch } from 'rxjs/Rx';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    constructor(private http: HttpClient){}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        console.log('intercepted request : ', req);
        return next.handle(req);

        //clone the request to add the new header
        // const cloneReq = req.clone({
        //     headers: req.headers.set('headerName', 'headerValue')
        // });
        // console.log('cloned request with new header : ', cloneReq);

        // return next.handle(cloneReq);
        // //send the newly created request
        // return next.handle(authReq).catchError((error, caught) => {
        //     //intercept the response error
        //     console.log('Error intercepted : ', error);

        //     //return the error to the method that called it
        //     return throwError(error); 
        // }) as any;
    }
}
