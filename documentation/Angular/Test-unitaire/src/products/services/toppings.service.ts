import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class ToppingsService {
  constructor(private http: HttpClient) {}

  getToppings(): Observable<string[]> {
    return this.http
      .get<string[]>(`${environment.baseUrl}/toppings`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
