import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowCaseComponent } from './components/show-case/show-case.component';
import { DetailPanierComponent } from './components/detail-panier/detail-panier.component';
import { ListArticlesComponent } from './components/show-case/list-articles/list-articles.component';
import { DetailArticleComponent } from './components/show-case/detail-article/detail-article.component';
import { ResumePanierComponent } from './components/show-case/resume-panier/resume-panier.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowCaseComponent,
    DetailPanierComponent,
    ListArticlesComponent,
    DetailArticleComponent,
    ResumePanierComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
