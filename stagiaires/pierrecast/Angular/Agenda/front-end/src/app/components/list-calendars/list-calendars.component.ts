import { Component, OnInit, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-list-calendars',
  templateUrl: './list-calendars.component.html',
  styleUrls: ['./list-calendars.component.scss']
})
export class ListCalendarsComponent implements OnInit {
  @ViewChild('grid', { static: false }) grid: jqxGridComponent;

  columns = [
		
		{text: 'Name', datafield: 'name'}
  ];
 
  sourceGrid = new jqx.dataAdapter({
		localData: [
		  {id: 1, name: 'NAMUR'},
		  {id: 2, name: 'NANTES'},
		  {id: 3, name: 'LORIENT'},
		  {id: 4, name: 'TOULOUSE'},
		]
	 });
  
  ngOnInit() {
  }

  ngAfterViewInit() {
	
  }
}
