import { Component, Input, OnInit } from '@angular/core';
import { MyEvent } from 'src/app/models/event.model/MyEvent';

@Component({
  selector: 'app-scheduler-view',
  templateUrl: './scheduler-view.component.html',
  styleUrls: ['./scheduler-view.component.css']
})
export class SchedulerViewComponent implements OnInit {

    @Input() events: MyEvent[] = [];

    constructor() { }

    ngOnInit(): void {
    }

}
