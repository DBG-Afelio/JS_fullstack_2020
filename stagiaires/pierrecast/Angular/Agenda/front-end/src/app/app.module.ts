import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';
import { CalendarJqxComponent } from './components/calendar-jqx/calendar-jqx.component';
import { ListCalendarsComponent } from './components/list-calendars/list-calendars.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CalendarJqxComponent,
    ListCalendarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    jqxGridModule, jqxSchedulerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
	entryComponents: [ AppComponent ]
})
export class AppModule { }
