import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './component/list/list.component';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './component/details/details.component';

@NgModule({
   declarations: [
      AppComponent,
      ListComponent,
      DetailsComponent
   ],
   imports: [
      AppRoutingModule,
      BrowserModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
