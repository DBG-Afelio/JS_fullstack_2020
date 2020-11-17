import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Observable, of } from 'rxjs';

@Injectable()
export class PizzasGuard implements CanActivate {
  constructor() {}

  canActivate(): Observable<boolean> {
    return of(true);
  }
}
