import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeViewComponent } from './views/home/home-view/home-view.component';
import { ArticleItemComponent } from './components/article-item/article-item/article-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    ArticleItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    //NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
