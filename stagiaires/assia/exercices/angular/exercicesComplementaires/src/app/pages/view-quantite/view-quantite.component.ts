import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-quantite',
  templateUrl: './view-quantite.component.html',
  styleUrls: ['./view-quantite.component.css']
})
export class ViewQuantiteComponent implements OnInit {
  @Input() value = 0;
  @Input() min = 0;
  @Input() max = 10;
  @Input() step = 1;
  @Output() valueChange: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
  }
  add(): void {
      if (this.value + this.step <= this.max) {
        this.value += this.step;
        this.valueChange.emit(this.value);
      }
  }
  remove(): void {
      if (this.value - this.step >= this.min) {
        this.value -= this.step;
        this.valueChange.emit(this.value);
      }
  }
  
}
