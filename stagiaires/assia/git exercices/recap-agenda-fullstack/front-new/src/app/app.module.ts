import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchedulerViewComponent } from './components/schedulerView/scheduler-view/scheduler-view.component';
import { SideMenuComponent } from './components/sideMenu/side-menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SchedulerViewComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
