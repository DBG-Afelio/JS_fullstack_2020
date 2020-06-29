import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewQuantiteComponent } from './pages/view-quantite/view-quantite.component';
import { MaPageComponent } from './pages/ma-page/ma-page.component';
import { ListeComponent } from './components/liste/liste.component';
import { QuantiteTotaleComponent } from './components/quantite-totale/quantite-totale.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewQuantiteComponent,
    MaPageComponent,
    ListeComponent,
    QuantiteTotaleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
