import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  ref: any = null;
  subject: Subject<number>;
  constructor() {
    this.subject = new Subject();
    this.subject.next(1);
  }

  changeNb(cpt) {
    this.subject.next(cpt);
  }

  getNombre(): Observable<number> {
    return new Observable((resolve) => {
      if (this.ref === null) {
        this.ref = setInterval(
          () => resolve.next(3), 1000
        );
      } else {
        clearInterval(this.ref);
        resolve.complete();
      }
    });
  }

}
