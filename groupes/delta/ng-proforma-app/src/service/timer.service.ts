import { Injectable } from '@angular/core';
import { Subject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  date: Subject<Date> = new Subject<Date>();
  rest_time: Subject<string> = new Subject<string>();
  deadline_hour:number = 15;

  constructor() {
    interval(1000).subscribe(() => {
      const now = new Date();
      this.date.next(now);
      if(now.getHours() < this.deadline_hour) {
        this.rest_time.next(`${this.deadline_hour - now.getHours() - 1}:${59 - now.getMinutes()}:${60 - now.getSeconds()}`);
      } else {
        this.rest_time.next(`${23 - now.getUTCHours()}:${59 - now.getMinutes()}:${60 - now.getSeconds()}`)
      }
    });
  }

  
}
