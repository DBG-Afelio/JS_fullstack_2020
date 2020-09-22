import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event.model/event';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  @Input() public events: Event[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
