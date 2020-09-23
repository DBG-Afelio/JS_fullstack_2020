import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { Calendar, EventSourceApi, EventSourceInput,  } from '@fullcalendar/core'; // include this line
import { Event } from 'src/app/models/event.model/event';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';
import frLocale from '@fullcalendar/core/locales/fr';
import { ViewEnum } from 'src/app/models/ViewEnum';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
 @Input() public events: Event[] = []; // Event form -- my created class
 public myEventsCalendar: EventSourceInput = [];
 @Output() addEventRequest: EventEmitter<DateSelectArg> = new EventEmitter();
 @Output() viewEventRequest: EventEmitter<boolean> = new EventEmitter();
  //public events = [];
  view: ViewEnum = ViewEnum.WEEK;
  options: CalendarOptions;

  constructor() { 

  }

  ngOnInit() {
    this.options = {
      editable: true,
      weekends: true,
      selectable: true,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay, listWeek'
      },
      select: this.handleDateClick.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventsSet: this.handleEvents.bind(this),
      //eventAdd: 
      //eventChange:
      //eventRemove:
      locales: [ esLocale, frLocale ],
      locale: 'fr',
      initialView: this.view,
      events: this.myEventsCalendar
    };
  }

  public handleDateClick(dateInfo: DateSelectArg): void {
    this.addEventRequest.emit(dateInfo);
  
  }

  public handleEventClick(eventInfo: EventClickArg): void { 
  }
  public handleEvents(events: Event): void {

  }

  public transformToEventApi(formEvents: Event[]): void {
    this.myEventsCalendar = events.map((eachFormEvent: Event) => {
      const ev = new Even;
      ev.
    }
  }



    // @ViewChild('fullcalendar') fullcalendar: FullCalendarComponent;
  // @ViewChild('external') external: ElementRef;

}
