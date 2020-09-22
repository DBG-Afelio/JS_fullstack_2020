import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-calendar-jqx',
  templateUrl: './calendar-jqx.component.html',
  styleUrls: ['./calendar-jqx.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarJqxComponent implements AfterViewInit, OnInit, OnChanges {

  @ViewChild('grid', { static: false }) grid: jqxGridComponent;

  @Input('events') events: Event[];

   constructor() {
     console.log('constructor')
   }

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
      this.source.localdata = this.events;
      this.dataAdapter = new jqx.dataAdapter(this.source);
    }
  }

  ngAfterViewInit() {
	
  }
}
