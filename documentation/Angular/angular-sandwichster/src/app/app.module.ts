import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Pages
import{ ListProductsComponent } from './pages/list-products/list-products.component'
import{ ListProductsAdminComponent } from './pages/list-products-admin/list-products-admin.component'
import{ ListProvidersComponent } from './pages/list-providers/list-providers.component'
import{ ListTotalOrdersComponent } from './pages/list-total-orders/list-total-orders.component'
import{ ListUsersComponent } from './pages/list-users/list-users.component'
import{ LoginComponent } from './pages/login/login.component'
import{ ProfileUserComponent } from './pages/profile-user/profile-user.component'
import{ SummaryOrderComponent } from './pages/summary-order/summary-order.component'
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    ListProductsAdminComponent,
    ListProvidersComponent,
    ListTotalOrdersComponent,
    ListUsersComponent,
    LoginComponent,
    ProfileUserComponent,
    SummaryOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
