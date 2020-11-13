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

  }

  ngOnInit() {
  }


  // first example methods
  // souscrire au tick et assigner le format time à la variable time
  // retenir la souscription pour arreter le timer
  public startTimerSimple() {
    if (!this.timeSubscription) {
      const dateStart = new Date();
      this.timeSubscription = this.timerService.tick$.subscribe(() => {
        this.time = this.timerService.getTimeFromMilliseconds(this.timerService.getMillseconds(dateStart, new Date()))
      })
    }
  }

  // Arrête le timer
  public stopTimerSimple() {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }

  // second example methods
  // écouter la méthode getTimer du service
  // accrocher via le pipe async
  public startTimer() {
    const dateStart = new Date();
    this.timer$ = this.timerService.getTimer();
  }

  //stopper le timer
  public stopTimer() {
    this.timer$ = null;
  }


  // third example methods
  // Ajoute une balise chrono
  public addTimerEx3() {

  }

  //accroche un timer (getTimer()) à la balise chrono
  public startTimerEx3(index) {
    const dateStart = new Date();
  }

  //stoppe un timer
  public stopTimerEx3(index) {

  }

  // stoppe tous les timers
  public stopAllEx3() {
  }

  // fourth example methods
  /*
    L'exercice consiste à afficher deux chronos sans déclancher deux fois l'observable
    ShareReplay
    TakeUntil
  */
  //
  public startTimerEx4() {
    const dateStart = new Date();

  }

  // Stopper le chrono (via subject)
  public stopTimerEx4() {
  }

  // fifth example methods
  // démarrer un chrono qui a un maximum de temps exprimer par un Time
  // implémenter getTimerUntilTime
  public startTimerEx5() {
    const dateStart = new Date();
  }

  public stopTimerEx5() {
  }


  // Sixth example
  /**
   * Démarrer un chrono partagé entre plusieurs fenêtres
   *  - Cas d'utilisation
   *  - le timer à déjà démarré (localStorage présent)
   *  - le timer n'a pas démarré
   *    - il démarre dans cette fenêtre
   *    - il démarre dans une autre fenêtre
   * Implémenter les méthodes du service
   */
  public startTimerEx6() {}


  // Veiller à ce qu'il ne reste pas de chrono en cours
  ngOnDestroy() {
    this.timerStopEx4$.next();
    this.timerStopEx4$.complete();
    this.stopTimerSimple();
  }
}
