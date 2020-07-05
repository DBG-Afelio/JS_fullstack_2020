import { Component, OnInit, Input, Output, EventEmitter, NgModule, OnChanges } from '@angular/core';

@Component({
  selector: 'app-quantite',
  templateUrl: './quantite.component.html',
  styleUrls: ['./quantite.component.css']
})
export class QuantiteComponent implements OnChanges {

  @Input() qtteIn: number;
  min = 0;
  step = 1;
  @Output() changedQtteEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnChanges(): void {
    console.log('ma recup quantite = ', this.qtteIn);
  }
  add(): void {
    this.qtteIn += this.step;
    this.changedQtteEvent.emit(this.qtteIn);
  }

  remove(): void {
    if (this.qtteIn - this.step >= this.min) {
      this.qtteIn -= this.step;
      this.changedQtteEvent.emit(this.qtteIn);
    }
  }

}
