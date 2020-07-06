import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewListComponent } from './page/view-list/view-list.component';
import { ViewDetailComponent } from './page/view-detail/view-detail.component';
import { ViewManagerComponent } from './page/view-manager/view-manager.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './component/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewListComponent,
    ViewDetailComponent,
    ViewManagerComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
