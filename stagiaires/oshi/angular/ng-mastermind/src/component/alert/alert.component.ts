import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() success: boolean;
  @Input() max_try: boolean;
  @Output() restart:EventEmitter<null> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  restartClick() {
    this.restart.emit();
  }

}
