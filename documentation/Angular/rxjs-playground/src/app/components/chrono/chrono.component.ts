import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Time } from '../../interfaces/time';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent implements OnInit {

  @Input() chrono : Time;
  @Output() start: EventEmitter<void> = new EventEmitter();
  @Output() stop: EventEmitter<void> = new EventEmitter();

  constructor() {
   
  }

  ngOnInit() {
    this.chrono = {
      days : 0,
      hours : 0,
      minutes : 0,
      seconds : 0,
      milliseconds : 0,
    }
  }

  startChrono(){
    this.start.emit();
  }

  stopChrono(){
    this.stop.emit();
  }
}
