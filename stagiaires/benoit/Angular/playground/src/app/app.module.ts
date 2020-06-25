import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { MessagesComponent }    from './messages/messages.component';

import { AppRoutingModule }     from './app-routing.module';

import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { MyComponentComponent } from './my-component/my-component.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';

@NgModule({
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
      //TheHttpClientInMemoryWebApiModulemoduleinterceptsHTTPrequests\\n//andreturnssimulatedserverresponses.\\n//Removeitwhenarealserverisreadytoreceiverequests.\\nHttpClientInMemoryWebApiModule.forRoot(\\nInMemoryDataService,
      dataEncapsulation
   ],
   declarations: [
      AppComponent,
      DashboardComponent,
      HeroesComponent,
      HeroDetailComponent,
      MessagesComponent,
      MyComponentComponent,
      ProductAlertComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }