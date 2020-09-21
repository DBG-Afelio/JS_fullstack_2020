import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/eventModel/Event';
import { EventService } from 'src/app/services/eventService/event.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public events: Event[];
  
  constructor(private eventService: EventService) { 
    this.eventService.getList().subscribe((list) => {
      this.events = list;
      console.log(list);
    });
  }

  ngOnInit(): void {
  }

}
