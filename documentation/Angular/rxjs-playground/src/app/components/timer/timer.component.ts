import { Time } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, timer } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  public destroy$ = new Subject();

  public timer= timer(new Date(),100 ).pipe(
    tap(tps => {
      console.log('timer emit:',tps);
    })
  );
   
  constructor() { }

  ngOnInit() {
  }


  public ngOnDestroy() { }

}
