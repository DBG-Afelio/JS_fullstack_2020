import { Time } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, Subscription, timer } from 'rxjs';
import { map, take, takeUntil, tap } from 'rxjs/operators';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  public destroy$ = new Subject();
  public chrono$: Observable<Time>;
  public chrono1$: Observable<Time>;
  public chrono2$: Observable<Time>;
  public chrono3$: Observable<Time>;
  public chrono:Time;
  public souscription: Subscription;
  public timer= interval(100).pipe(
    tap(tps => {
      console.log('timer emit:',tps);
    }),
    take(100)
  );
   
  constructor(public timeService: TimerService) { 

  }

  ngOnInit() {
  }

  public startChrono() {
    const date = new Date();
    if(!this.souscription){
      this.souscription = this.timer
        .subscribe(
        () => {
          this.chrono = this.timeService.getTimeFromMilliseconds(this.timeService.getMillseconds(date, new Date()))
          console.log('emit')
        },
        () => console.log('error'),
        () => console.log('complete') 
      )
    }
  }

  public stopChrono() {
    if (this.souscription) {
      this.souscription.unsubscribe();
      this.souscription = null;
    }
  }
  public startChrono2() {
    const date = new Date();
    if(!this.chrono$){
      this.chrono$ = this.timer
        .pipe(
          map(() => {
            return this.timeService.getTimeFromMilliseconds(this.timeService.getMillseconds(date, new Date()))
          })
      )
    }
  }

  public stopChrono2() {
    if (this.chrono$) {
      this.chrono$ = null;
    }
  }

  startChrono3(index: number) {
    // this.chrono1$
    // this["chrono1$"]
    let targetChrono = this['chrono' + index + '$'] as Observable<Time>;
    const date = new Date();
    if(!this['chrono' + index + '$']){
      this['chrono' + index + '$'] = this.timer
        .pipe(
          map(() => {
            return this.timeService.getTimeFromMilliseconds(this.timeService.getMillseconds(date, new Date()))
          }),
          takeUntil(this.destroy$)
      )
    }
  }

  stopChrono3(index: number) {
    if (this['chrono' + index + '$']) {
      this['chrono' + index + '$'] = null;
    }
  }

  stopAll(){
    this.destroy$.next();
    this.chrono1$ = null;
    this.chrono2$ = null;
    this.chrono3$ = null;
  }

  public ngOnDestroy() {
    this.stopChrono();
    this.destroy$.complete();
  }

}
