import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchedulerViewComponent } from './components/schedulerView/scheduler-view/scheduler-view.component';
import { SideMenuComponent } from './components/sideMenu/side-menu/side-menu.component';

import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService, DragAndDropService, ResizeService } from '@syncfusion/ej2-angular-schedule';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule, ChipListModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  declarations: [
    AppComponent,
    SchedulerViewComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScheduleModule,
    RecurrenceEditorModule,
    ReactiveFormsModule,
    ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule, ChipListModule,
  ],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    MonthAgendaService,
    TimelineViewsService,
    TimelineMonthService,
    DragAndDropService,
    ResizeService,    
],
  bootstrap: [AppComponent]
})
export class AppModule { }
