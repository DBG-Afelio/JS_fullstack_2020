import { Component } from '@angular/core';
import { MyEvent } from './models/event.model/MyEvent';
import { Tag } from './models/tag.model/tag';
import { EventsService } from './services/events.service';
import { TagsService } from './services/tags.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-new';
  public eventList: MyEvent[] = [];
  public tagList: Tag[] = [];

  constructor(
    private eventsService: EventsService,
    private tagsService: TagsService,
  ){
    this.eventsService.getAll().subscribe((events) => {
      this.eventList = events;
      console.log(events);
    });
    this.tagsService.getAll().subscribe((tags) => this.tagList = tags);
  }
}
