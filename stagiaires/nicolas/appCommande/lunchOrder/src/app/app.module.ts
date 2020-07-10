import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatSelectModule} from '@angular/material/select'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon'; 

import { AppComponent } from './app.component';

import { LoginComponent } from './view/login/login.component';
import { ProvidersListComponent } from './view/providers-list/providers-list.component';
import { ProductsListComponent } from './view/products-list/products-list.component';
import { OrderProductComponent } from './view/order-product/order-product.component';
import { ModifyProviderComponent } from './view/modify-provider/modify-provider.component';
import { ModifyProductComponent } from './view/modify-product/modify-product.component';
import { UsersListComponent } from './view/users-list/users-list.component';
import { UserDetailsComponent } from './view/user-details/user-details.component';
import { DailyOrdersComponent } from './view/daily-orders/daily-orders.component';
import { OrdersHistoryComponent } from './view/orders-history/orders-history.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { ProviderDisplayComponent } from './components/provider-display/provider-display.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProvidersListComponent,
    ProductsListComponent,
    OrderProductComponent,
    ModifyProviderComponent,
    ModifyProductComponent,
    UsersListComponent,
    UserDetailsComponent,
    DailyOrdersComponent,
    OrdersHistoryComponent,
    OrdersListComponent,
    ProviderDisplayComponent,
    NavBarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatSelectModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,

  ],
  entryComponents: [
    OrderProductComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
