import { Injectable } from '@angular/core';
import { fromEvent, interval, merge, Observable, of, Subject } from 'rxjs';
import { filter, map, switchMap, takeWhile, tap } from 'rxjs/operators';
import { Time } from '../interfaces/time';

@Injectable()
export class TimerService {

  public tick$: Observable<number>;
  public timer$: Observable<number>;
  
  //Fifth
  private multiWindowSubjectStart: Subject<Date> = new Subject();
  private multiTimerAlreadyLaunched: string[]= [];

  constructor() {
    this.tick$ = interval(100).pipe(
      tap((time) => console.log("timer:", time)),
    )
  }

  public getMillseconds(dateFrom: Date, dateTo: Date): number {
    return dateTo.getTime() - dateFrom.getTime();
  }

  public getTimeFromMilliseconds(millisecondsOrigin: number): Time {
    const days = Math.floor(millisecondsOrigin / (1000 * 60 * 60 * 24));
    let reste = millisecondsOrigin % (1000 * 60 * 60 * 24);
    const hours = Math.floor(millisecondsOrigin / (1000 * 60 * 60));
    reste = millisecondsOrigin % (1000 * 60 * 60);
    const minutes = Math.floor(reste / (1000 * 60));
    reste = reste % (1000 * 60);
    const seconds = Math.floor(reste / (1000));
    reste = reste % (1000);
    const milliseconds = reste;
    return {
      days,
      hours,
      minutes,
      seconds,
      milliseconds
    }
  }

  public lessThan(time1:Time, time2: Time) {
    return (
      time1.days < time2.days
      || time1.hours < time2.hours 
      || time1.minutes < time2.minutes 
      || time1.seconds < time2.seconds
      || time1.milliseconds < time2.milliseconds
      );
  }

  //example3
  /**
   * retourne un time entre une date optionnelle fournie et maintenant
   * getMillseconds()
   * getTimeFromMilliseconds()
   */
  public getTimer(dateStart: Date = new Date()): Observable<Time> {
    throw new Error('not Yet implemented')
  }

  // Example 5 
  /**
   * renvoit un Time entre une date et maintenant s'arrète quand le Time donné est dépassé
   * takeWhile
   * @param limitTime 
   */
  public getTimerUntilTime(limitTime: Time, dateStart: Date = new Date()): Observable<Time> {
    throw new Error('not Yet implemented')
    
  }

  public getMultiWindowTimer(id: string) : Observable<Time> {
    return merge(
      this.isMultiWindowTimerStarted(id),
      this.otherWindowStartTimer(id),
      this.multiWindowSubjectStart
    ).pipe(
      tap((v)=>console.log('merge', v)),
      switchMap((date:Date)=>this.getTimer(date))
    )
  }

  public startMultiWindowTimer(id){
    if(!this.multiTimerAlreadyLaunched.includes(id)) {
      this.multiTimerAlreadyLaunched.push(id);
      const date = new Date();
      this.saveDateInStorage(id,date);
      this.multiWindowSubjectStart.next(date);
    }
  }

  public isMultiWindowTimerStarted(id: string): Observable<Date | null> {
    const storedFlag = localStorage.getItem(id);
    const startDate = storedFlag!==null ? new Date(storedFlag):null; 
    return of(startDate).pipe(tap(()=>console.log('storage state', startDate)));
  }

  private otherWindowStartTimer(id: string): Observable<Date | null> {
    return fromEvent(window, 'storage').pipe(
      tap((event)=>console.log('storage event', event)),
      switchMap((event) => this.isMultiWindowTimerStarted(id)),
      filter((date)=> date !== null)
    )
  }

  private saveDateInStorage(id: string, date: Date){
    localStorage.setItem(id,date.toISOString())
  }



  
}
