import { AfterViewInit, Component, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation, EventEmitter } from '@angular/core';
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
import { plainToClass } from 'class-transformer'
import { Event } from 'src/app/models/eventModel/Event';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-calendar-jqx',
  templateUrl: './calendar-jqx.component.html',
  styleUrls: ['./calendar-jqx.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarJqxComponent implements AfterViewInit, OnInit, OnChanges {

  @ViewChild('schedulerReference') myScheduler: jqxSchedulerComponent;

  @Input('events') events: Event[];
  @Input('namurEvents') namurEvents: Event[];
  @Output() create: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() update: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() remove: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() { }

  dataAdapter: any;
	date: any = new jqx.date(2020, 9, 23);
  source: any =
  {
      dataType: 'json',
      dataFields: [
          { name: 'id', type: 'string' },
          { name: 'description', type: 'string' },
          { name: 'name', type: 'string' },
          { name: 'style', type: 'string' },
          { name: 'date_start', type: 'date', format: 'yyyy-MM-dd HH:mm' },
          { name: 'date_end', type: 'date', format: 'yyyy-MM-dd HH:mm' }
      ],
      id: 'id'      
  };

  appointmentDataFields: any =
  {
    from: 'date_start',
    to: 'date_end',
    id: 'id',
    description: 'description',
    subject: 'name',
    style: 'style'
  };
  views: any[] =
  [
    'dayView',
    'weekView',
    'monthView'
  ];
  
  public getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
  }
 
  ngOnInit() {
    
  }

  ngOnChanges(changes :SimpleChanges) {
    if (changes.events) {
      this.resetColorEvent();
    }
  }

  ngAfterViewInit() {
    this.resetColorEvent();
  }

  resetColorEvent() {
    this.source.localdata = [];

    if (this.events) {
      this.events.forEach(item => item['style'] = "#77959a");
      this.source.localdata.push(...this.events);
    }

    if (this.namurEvents) {
      this.namurEvents.forEach(item => {
        item['style'] = "#f08080";
         if (!this.checkInDB(item)){
          this.source.localdata.push(item);
        }
      });
    }

    this.dataAdapter = new jqx.dataAdapter(this.source); 
  }

  checkInDB(extEvent: Event): boolean {
    return this.events.some(event => event.code === extEvent.code)
  }

  onAddApp(event: any): void {
    const data = event.args.appointment.originalData;
    console.log('add', event);
    this.create.emit(this.transformDatatoEvent(data));
  }

  onChangeApp(event: any): void {
    const data = event.args.appointment.originalData;
    console.log('change', event);
    if (data.id !== 0) {
      data.style = "#77959a";
      this.update.emit(this.transformDatatoEvent(data));
    } else {
      this.create.emit(this.transformDatatoEvent(data));
    }
  }

  onDeleteApp(event: any): void {
    const data = event.args.appointment.originalData;      
    console.log('delete', event);
    if (data.id !== 0 && window.confirm('Etes-vous sûr de vouloir supprimer cet évènement ?')) {
      this.remove.emit(this.transformDatatoEvent(data));
    }
  }

  transformDatatoEvent(data: any): Event {
    return plainToClass(Event, data);   
  }
}
