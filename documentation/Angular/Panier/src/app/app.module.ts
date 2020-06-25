import { BasketSummaryComponent } from './component/basket-summary/basket-summary.component';
import { DetailArticleComponent } from './component/detail-article/detail-article.component';
import { ListArticleComponent } from './component/list-article/list-article.component';
import { PanierComponent } from './page/panier/panier.component';
import { EshopComponent } from './page/eshop/eshop.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    EshopComponent,
    PanierComponent,
    DetailArticleComponent,
    ListArticleComponent,
    BasketSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
