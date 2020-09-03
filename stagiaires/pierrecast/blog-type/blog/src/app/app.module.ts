import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ArticleItemComponent } from './pages/article-item/article-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ListArticlesComponent } from './components/list-articles/list-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ArticleItemComponent,
    ListArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
