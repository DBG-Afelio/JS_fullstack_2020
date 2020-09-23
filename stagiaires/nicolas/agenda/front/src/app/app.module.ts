import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Agenda } from './agenda';
import { CalendarsListComponent } from './views/calendars-list/calendars-list.component';
import { CalendarViewComponent } from './views/calendar-view/calendar-view.component';
import { EventDetailsComponent } from './views/event-details/event-details.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { TagFormComponent } from './components/tag-form/tag-form.component';

@NgModule({
  declarations: [
    Agenda,
    CalendarsListComponent,
    CalendarViewComponent,
    EventDetailsComponent,
    EventFormComponent,
    TagFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [Agenda]
})
export class AppModule { }
