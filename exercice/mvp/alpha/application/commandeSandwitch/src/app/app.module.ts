import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SupplierItemComponent } from './components/supplier-item/supplier-item.component';

import { HttpClientModule } from '@angular/common/http';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ValidatePageComponent } from './pages/validate-page/validate-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AuthenticationFormComponent } from './components/authentication-form/authentication-form.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { UserNavComponent } from './components/user-nav/user-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SupplierItemComponent,
    HistoryPageComponent,
    ProductDetailPageComponent,
    ValidatePageComponent,
    AdminPageComponent,
    ProductPageComponent,
    AuthenticationFormComponent,
    MainNavComponent,
    AdminNavComponent,
    UserNavComponent
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
