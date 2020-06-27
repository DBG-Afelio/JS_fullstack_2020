import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app.component';
import { ViewBasketComponent } from './page/view-basket/view-basket.component';
import { ViewShopComponent } from './page/view-shop/view-shop.component';

import { DetailComponent } from './component/detail/detail.component';
import { BasketSummaryComponent } from './component/basket-summary/basket-summary.component';
import { BasketRecapComponent } from './component/basket-recap/basket-recap.component';
import { ShopComponent } from './component/shop/shop.component';
import { BasketTotalsComponent } from './component/basket-totals/basket-totals.component';
import { BasketItemComponent } from './component/basket-item/basket-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewBasketComponent,
    ViewShopComponent,
    ShopComponent,
    DetailComponent,
    BasketSummaryComponent,
    BasketRecapComponent,
    BasketTotalsComponent,
    BasketItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
