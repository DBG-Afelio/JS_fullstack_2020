import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './containers/app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductItemComponent } from './containers/product-item/product-item.component';
import { ProductsComponent } from './containers/products/products.component';
import { PizzaDisplayComponent } from './components/pizza-display/pizza-display.component';
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import { PizzaItemComponent } from './components/pizza-item/pizza-item.component';
import { PizzaToppingsComponent } from './components/pizza-toppings/pizza-toppings.component';
import { HttpClientModule } from '@angular/common/http';


import { ModalModule } from 'ngx-bootstrap/modal';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PizzaResumePopUpComponent } from './components/pizza-form/pizza-resume-pop-up/pizza-resume-pop-up.component'


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductsComponent,
    PizzaDisplayComponent,
    PizzaFormComponent,
    PizzaItemComponent,
    PizzaToppingsComponent,
    PizzaResumePopUpComponent,

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
