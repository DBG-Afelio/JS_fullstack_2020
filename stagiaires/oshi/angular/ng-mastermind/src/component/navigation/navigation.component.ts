import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Output() actual_lvl: EventEmitter<number> = new EventEmitter<number>();
  @Input() used: boolean;
  act_lvl_button: HTMLElement;
  IndicatorWidth: string;
  IndicatorLeft: string;
  IndicatorColor: string;

  constructor() { }

  ngOnInit() {
  }

  handleIndicator(element: HTMLElement):void {
    this.IndicatorWidth = `${element.offsetWidth}px`;
    this.IndicatorLeft = `${element.offsetLeft}px`;
    this.IndicatorColor = element.getAttribute("active-color");
  }

  select_lvl(element: HTMLElement):void {
    if(this.used) {
      this.used = false;
    } else {
      this.actual_lvl.emit(Number(element.textContent.split(" ")[1]));
      this.act_lvl_button = element;
      this.handleIndicator(this.act_lvl_button);
    }
  }

}
