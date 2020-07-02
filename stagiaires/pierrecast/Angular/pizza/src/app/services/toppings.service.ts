import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToppingsService {
  constructor(private http: HttpClient) {

  }

  getToppings(): Observable<string[]> {
    return this.http.get<string[]>(`http://localhost:3000/toppings`);
  }
}
