import { Time } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, Subscription, timer } from 'rxjs';
import { map, takeUntil,take, tap } from 'rxjs/operators';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  public destroy$ = new Subject();

  public chrono:Time;
  public subscription: Subscription

  public timer= interval(100).pipe(
    tap(tps => {
      console.log('timer emit:',tps);
    }),
    take(100)
  );
   
  constructor(public timeService:TimerService) { 
    
  }

  ngOnInit() {
  }


  public ngOnDestroy() {
    this.stopChrono()
  }

  public startChrono(){
    const date = new Date();
    if (!this.subscription) {
      this.subscription = this.timer.subscribe(
        ()=> {
          this.chrono = this.timeService.getTimeFromMilliseconds(this.timeService.getMillseconds(date, new Date()))
          console.log('emit')
        },
        ()=> console.log('error'),
        ()=> console.log('complete')
      )
    }
  }

  public stopChrono(){
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
