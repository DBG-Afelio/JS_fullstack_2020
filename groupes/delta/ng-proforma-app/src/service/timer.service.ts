import { Injectable } from '@angular/core';
import { Subject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  date: Subject<Date> = new Subject<Date>();

  constructor() {
    interval(1000).subscribe(() => this.date.next(new Date()));
  }

  
}
