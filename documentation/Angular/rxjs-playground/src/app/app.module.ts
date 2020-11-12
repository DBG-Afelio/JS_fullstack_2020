import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { ChronoComponent } from './components/chrono/chrono.component';
import { Timer2Component } from './components/timer2/timer2.component';
import { TimerService } from './services/timer.service';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    Timer2Component,
    ChronoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
