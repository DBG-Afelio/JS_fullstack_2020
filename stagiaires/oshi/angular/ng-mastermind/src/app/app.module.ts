import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from 'src/component/navigation/navigation.component';
import { MastermaindComponent } from 'src/page/mastermaind/mastermaind.component';
import { SelectorComponent } from 'src/component/selector/selector.component';
import { ResultsComponent } from 'src/component/results/results.component';
import { AlertComponent } from 'src/component/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MastermaindComponent,
    SelectorComponent,
    ResultsComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
