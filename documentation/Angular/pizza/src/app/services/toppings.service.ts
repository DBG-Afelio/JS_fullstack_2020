import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToppingsService {
  constructor() {}

  getToppings(): Observable<string[]> {
    return of(null)
  }
}
