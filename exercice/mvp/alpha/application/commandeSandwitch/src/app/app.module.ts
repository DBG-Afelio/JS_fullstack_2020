import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

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
import { ProductItemComponent } from './components/product-item/product-item.component';
import { NavProductComponent } from './components/nav-product/nav-product.component';
import { DetailItemComponent } from './components/detail-item/detail-item.component';
import { SupplierAdminPageComponent } from './pages/supplier-admin-page/supplier-admin-page.component';
import { SupplierFormPageComponent } from './pages/supplier-form-page/supplier-form-page.component';
import { AuthenticationFormComponent } from './components/authentication-form/authentication-form.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { UserNavComponent } from './components/user-nav/user-nav.component';
import { SupplierFormComponent } from './components/supplier-form/supplier-form.component';
import { UserFormPageComponent } from './pages/user-form-page/user-form-page.component';
import { OrderFormPageComponent } from './pages/order-form-page/order-form-page.component';
import { UserAdminPageComponent } from './pages/user-admin-page/user-admin-page.component';
import { ProductFormPageComponent } from './pages/product-form-page/product-form-page.component';
import { ProductAdminPageComponent } from './pages/product-admin-page/product-admin-page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { OptionFormComponent } from './components/option-form/option-form.component';
import { AdminOrderTodayPageComponent } from './pages/admin-order-today-page/admin-order-today-page.component';
import { MinDirective } from './directives/min-directive.directive';
import { TimeTrackingComponent } from './components/time-tracking/time-tracking.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SupplierItemComponent,
    DetailItemComponent,
    HistoryPageComponent,
    ProductDetailPageComponent,
    ValidatePageComponent,
    AdminPageComponent,
    ProductPageComponent,
    ProductItemComponent,
    NavProductComponent,
    DetailItemComponent,
    SupplierAdminPageComponent,
    SupplierFormPageComponent,
    AuthenticationFormComponent,
    MainNavComponent,
    AdminNavComponent,
    UserNavComponent,
    SupplierFormComponent,
    UserFormPageComponent,
    OrderFormPageComponent,
    UserAdminPageComponent,
    ProductFormPageComponent,
    ProductAdminPageComponent,
    ProductFormComponent,
    OptionFormComponent,
    AdminOrderTodayPageComponent,
    MinDirective,
    TimeTrackingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent], 

})
export class AppModule { }
