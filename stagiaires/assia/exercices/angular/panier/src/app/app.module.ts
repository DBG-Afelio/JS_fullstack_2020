import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EShopPageComponent } from './pages/e-shop-page/e-shop-page.component';
import { PanierPageComponent } from './pages/panier-page/panier-page.component';
import { PanierTotauxComponent } from './components/panier-totaux/panier-totaux.component';
import { ListeArticlesComponent } from './components/liste-articles/liste-articles.component';
import { DetailsArticleComponent } from './components/details-article/details-article.component';
import { ListeArticlesCommandesComponent } from './components/liste-articles-commandes/liste-articles-commandes.component';

@NgModule({
  declarations: [
    AppComponent,
    EShopPageComponent,
    PanierPageComponent,
    PanierTotauxComponent,
    ListeArticlesComponent,
    DetailsArticleComponent,
    ListeArticlesCommandesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
