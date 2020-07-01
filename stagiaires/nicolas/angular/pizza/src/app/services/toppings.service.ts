import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToppingsService {
  constructor(private http: HttpClient) {}

  getToppings(): Observable<string[]> {
    return this.http.get<string[]>(`http://localhost:3000/toppings`)
  }
}
