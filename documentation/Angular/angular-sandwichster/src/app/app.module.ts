import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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


//Components
import{ ListItemsComponent } from './components/list-items/list-items.component'
import{ DisplayItemComponent } from './components/display-item/display-item.component'
import{ DisplayOptionsItemComponent } from './components/display-options-item/display-options-item.component'

// Sidebar 
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component'

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
    SummaryOrderComponent,
    ListItemsComponent,
    DisplayItemComponent,
    SidebarComponent,
    DisplayOptionsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
