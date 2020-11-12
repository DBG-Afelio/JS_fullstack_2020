import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, timer } from 'rxjs';
import { map, shareReplay, takeUntil, tap } from 'rxjs/operators';
import { Time } from '../../interfaces/time';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-timer2',
  templateUrl: './timer2.component.html',
  styleUrls: ['./timer2.component.scss']
})
export class Timer2Component implements OnInit, OnDestroy {

  // first example variables
  public time: Time;
  public timeSubscription: Subscription;

  // second example variables
  public timer$: Observable<Time>;

  // thiird example variables
  public timersEx3$: Observable<Time>[] = [];

  // Fouth example variables
  public timerStopEx4$: Subject<void> = new Subject();
  public timerEx4Shared$: Observable<Time>;

  // Fifth example variables
  public timerEx5$: Observable<Time>;

  // Sixth example variables
  public timerEx6$: Observable<Time>;

  constructor(public timerService: TimerService) { 
    this.timerStopEx4$.subscribe(()=>console.log("subject emit"));
    this.timerEx6$ = this.timerService.getMultiWindowTimer('test');
  }

  ngOnInit() {
  }


  // first example methods
  public startTimerSimple() {
    const dateStart = new Date();
    this.timeSubscription = this.timerService.tick$.subscribe((value: any) => {
      this.time = this.timerService.getTimeFromMilliseconds(this.timerService.getMillseconds(dateStart, new Date()));
    })
  }

  public stopTimerSimple() {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }

  // second example methods
  public startTimer() {
    const dateStart = new Date();
    this.timer$ = this.timerService.getTimer();
  }

  public stopTimer() {
    if (this.timer$) {
      this.timer$ = null;
    }
  }


  // third example methods
  public addTimerEx3() {
    this.timersEx3$.push(null);
  }

  public startTimerEx3(index) {
    const dateStart = new Date();
    this.timersEx3$[index] = this.timerService.getTimer();
  }

  public stopTimerEx3(index) {
    if (this.timersEx3$[index]) {
      this.timersEx3$[index] = null;
    }
  }

  public stopAllEx3() {
    this.timersEx3$.forEach((obs, index) => this.stopTimerEx3(index));
  }

  // fourth example methods
  public startTimerEx4() {
    const dateStart = new Date();  
    this.timerEx4Shared$ = this.timerService
      .getTimer()
      .pipe(
        takeUntil(this.timerStopEx4$),
        shareReplay(1));    
  }

  public stopTimerEx4() {
    this.timerStopEx4$.next();
  }

  // fifth example methods
  public startTimerEx5() {
    const dateStart = new Date();  
    this.timerEx5$ = this.timerService
      .getTimerUntilTime({days:0,hours:0,minutes:0,seconds:5,milliseconds:0})
        
  }

  public stopTimerEx5() {
    this.timerEx5$ = null;
  }

  ngOnDestroy() {
    this.timerStopEx4$.next();
    this.timerStopEx4$.complete();
    this.stopTimerSimple();
  }
}
