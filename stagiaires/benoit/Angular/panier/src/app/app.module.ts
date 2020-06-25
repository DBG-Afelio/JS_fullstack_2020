import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticleDisplayedComponent } from './components/articleDisplayed/articleDisplayed.component';
import { ListAsideComponent } from './components/listAside/listAside.component';
import { SummaryBasketComponent } from './components/summaryBasket/summaryBasket.component';
import { DataPriceQuantityComponent } from './components/dataPriceQuantity/dataPriceQuantity.component';


@NgModule({
   declarations: [
      AppComponent,
      FooterComponent,
      ArticleDisplayedComponent,
      ListAsideComponent,
      SummaryBasketComponent,
      DataPriceQuantityComponent,
      FormsModule
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
