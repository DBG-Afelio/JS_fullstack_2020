import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { Event } from 'src/app/models/eventModel/Event';
import { EventService } from 'src/app/services/eventService/event.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent  implements AfterViewInit, OnInit {
  @ViewChild('grid', { static: false }) grid: jqxGridComponent;


  public events: Event[];
  public columns = [
		{text: 'Id', datafield: 'id'},
		{text: 'Name', datafield: ''}
  ];
 
  source = new jqx.dataAdapter({
		localData: [
		  {id: 1, name: 'Hydrogen'},
		  {id: 2, name: 'Helium'},
		  {id: 3, name: 'Lithium'},
		  {id: 4, name: 'Beryllium'},
		  {id: 5, name: 'Boron'},
		  {id: 6, name: 'Carbon'},
		  {id: 7, name: 'Nitrogen'},
		  {id: 8, name: 'Oxygen'},
		  {id: 9, name: 'Fluorine'},
		  {id: 10, name: 'Neon'},
		  {id: 11, name: 'Sodium'},
		  {id: 12, name: 'Magnesium'},
		  {id: 13, name: 'Aluminum'},
		  {id: 14, name: 'Silicon'},
		  {id: 15, name: 'Phosphorus'},
		  {id: 16, name: 'Sulfur'},
		  {id: 17, name: 'Chlorine'},
		  {id: 18, name: 'Argon'},
		  {id: 19, name: 'Potassium'},
		  {id: 20, name: 'Calcium'}
		]
	 });

	 constructor(private eventService: EventService) { 
		this.eventService.getList().subscribe((list) => {
		  this.events = list;
		  console.log(list);
		});
	  }
	 
  ngOnInit() {
  }

  ngAfterViewInit() {
	
  } 

 

 
}
