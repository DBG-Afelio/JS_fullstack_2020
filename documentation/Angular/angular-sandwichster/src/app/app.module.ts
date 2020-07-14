// Essentials modules and components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Framework CSS 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

// Pages
import{ ListProductsComponent } from './pages/list-products/list-products.component'
import{ ListSuppliersComponent } from './pages/list-suppliers/list-suppliers.component'
import{ ListTotalOrdersComponent } from './pages/list-total-orders/list-total-orders.component'
import{ LoginComponent } from './pages/login/login.component'
import{ DetailSupplierComponent } from './pages/detail-supplier/detail-supplier.component'
import{ AddNewProductComponent } from './pages/add-new-product/add-new-product.component'


// Components
import{ ListItemsComponent } from './components/list-items/list-items.component'
import{ DisplayItemComponent } from './components/display-item/display-item.component'
import{ DisplayOptionsItemComponent } from './components/display-options-item/display-options-item.component'
import { ListSuppliersCompComponent } from './components/list-suppliers-comp/list-suppliers-comp.component'
import { DetailSupplierCompComponent } from './components/detail-supplier-comp/detail-supplier-comp.component'
import { ModifyItemComponent } from './components/modify-item/modify-item.component'


// User (Partie admin)
import { DetailsUserComponent } from './components/details-user/details-user.component'
import{ ProfileUserComponent } from './pages/profile-user/profile-user.component'
import { ListUsersComponent } from './pages/list-users/list-users.component'
import { HistoryOrdersUserComponent } from './pages/history-orders-user/history-orders-user.component'

// Sidebar 
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { DisplayUserComponent } from './pages/display-user/display-user.component';


@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    ListSuppliersComponent,
    ListTotalOrdersComponent,
    ListUsersComponent,
    LoginComponent,
    ProfileUserComponent,
    ListItemsComponent,
    DisplayItemComponent,
    SidebarComponent,
    DisplayOptionsItemComponent,
    ListSuppliersCompComponent,
    DetailSupplierComponent,
    DetailSupplierCompComponent,
    ModifyItemComponent,
    AddNewProductComponent,
    DetailsUserComponent,
    HistoryOrdersUserComponent,
    DisplayUserComponent,
    ModifyItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
