// import { FullCalendarComponent } from '@fullcalendar/angular';
// import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
// import { Calendar, EventSourceApi, EventSourceInput,  } from '@fullcalendar/core'; // include this line
// import dayGridPlugin from '@fullcalendar/daygrid';

import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Event } from 'src/app/models/event.model/event';
import { AgendaService, DayService, MonthAgendaService, MonthService,
  TimelineMonthService, TimelineViewsService, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  template: '<ejs-schedule></ejs-schedule>',
  styleUrls: ['./main-view.component.css'],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    MonthAgendaService,
    TimelineViewsService,
    TimelineMonthService
  ]
})
export class MainViewComponent implements OnInit {
 @Input() public events: Event[] = []; // Event form -- my created class

  public data: object[] = [{
    id: 2,
    EventName: 'meeting',
  }]

  constructor() {}

  ngOnInit(): void {}


}
