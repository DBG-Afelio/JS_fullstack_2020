import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SupplierItemComponent } from './components/supplier-item/supplier-item.component';
import { NavMainComponent } from './components/nav-main/nav-main.component';
import { HttpClientModule } from '@angular/common/http';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ValidatePageComponent } from './pages/validate-page/validate-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SupplierItemComponent,
    NavMainComponent,
    HistoryPageComponent,
    ProductDetailPageComponent,
    ValidatePageComponent,
    AdminPageComponent
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
