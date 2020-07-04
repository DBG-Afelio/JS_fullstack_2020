import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';

@Component({
  selector: 'app-quantite',
  templateUrl: './quantite.component.html',
  styleUrls: ['./quantite.component.css']
})
export class QuantiteComponent implements OnInit {

  @Input() qtteIn: number;
  min = 0;
  step = 1;
  @Output() changedQtteEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
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
