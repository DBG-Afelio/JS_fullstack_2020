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
    }),
    takeUntil(this.destroy$)
  );

  
  
  public subscribers: Subscription[] = [];
   
  constructor() { }

  ngOnInit() {


  }

  // return a
  public startTimer(): Observable<{hours: number, minutes: number, seconds:number, milliseconds: number}> {
    const fromDate = new Date();
    return this.timer.pipe(
      map(tps => {
        const diffdate = new Date().getTime() - fromDate.getTime();
        const hours = Math.floor(diffdate / (1000*60*60));
        let reste = diffdate % (1000*60*60);
        const minutes= Math.floor(reste / (1000*60));
        reste = reste % (1000*60);
        const seconds = Math.floor(reste / (1000));
        reste = reste % (1000);
        const milliseconds = reste;
        return {
          hours,
          minutes,
          seconds,
          milliseconds
        }
      })
    );
  }

  public startCount(index) {
    if(this.subscribers.length <= index ||  !this.subscribers[index]) {
      this.subscribers[index] = this.startTimer().pipe(
        tap ((tps)=>{
          console.log('tps', tps,'index',index)
        }
      )).subscribe(()=>{},()=>{}, () =>  this.subscribers[index] = null);
    }
  }
  public stopCount(index) {
    if(this.subscribers.length > index &&  this.subscribers[index]) {    
      this.subscribers[index].unsubscribe();
      this.subscribers[index] = null;
    }
  }

  public stopAll() {
    this.destroy$.next();
  }

  public ngOnDestroy() {
    this.destroy$.complete();
    this.subscribers.forEach((subscriber, index) => this.stopCount(index));
  }

}
