import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//Pages
import{ ListProductsComponent } from './pages/list-products/list-products.component'
import{ ListProductsAdminComponent } from './pages/list-products-admin/list-products-admin.component'
import{ ListSuppliersComponent } from './pages/list-suppliers/list-suppliers.component'
import{ ListTotalOrdersComponent } from './pages/list-total-orders/list-total-orders.component'
import{ ListUsersComponent } from './pages/list-users/list-users.component'
import{ LoginComponent } from './pages/login/login.component'
import{ ProfileUserComponent } from './pages/profile-user/profile-user.component'
import{ SummaryOrderComponent } from './pages/summary-order/summary-order.component'
import{ DetailSupplierComponent } from './pages/detail-supplier/detail-supplier.component'

//Components
import{ ListItemsComponent } from './components/list-items/list-items.component'
import{ DisplayItemComponent } from './components/display-item/display-item.component'
import{ DisplayOptionsItemComponent } from './components/display-options-item/display-options-item.component'
import { ListSuppliersCompComponent } from './components/list-suppliers-comp/list-suppliers-comp.component'
import { DetailSupplierCompComponent } from './components/detail-supplier-comp/detail-supplier-comp.component'

// Sidebar 
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component'

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    ListProductsAdminComponent,
    ListSuppliersComponent,
    ListTotalOrdersComponent,
    ListUsersComponent,
    LoginComponent,
    ProfileUserComponent,
    SummaryOrderComponent,
    ListItemsComponent,
    DisplayItemComponent,
    SidebarComponent,
    DisplayOptionsItemComponent,
    ListSuppliersCompComponent,
    DetailSupplierComponent,
    DetailSupplierCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
