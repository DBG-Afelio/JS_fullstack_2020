import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeViewComponent } from './views/home/home-view/home-view.component';
import { ArticleItemComponent } from './components/article-item/article-item/article-item.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail/article-detail.component';
import { SingleArticleViewComponent } from './views/single-article/single-article-view/single-article-view.component';
import { RouterModule } from '@angular/router';
import { CommentaireItemComponent } from './components/commentaire-item/commentaire-item/commentaire-item.component';
import { CommentaireformComponent } from './components/commentaire-form/commentaireform/commentaireform.component';
import { ArticleFormViewComponent } from './views/article-form-view/article-form-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    ArticleItemComponent,
    ArticleDetailComponent,
    SingleArticleViewComponent,
    CommentaireItemComponent,
    CommentaireformComponent,
    ArticleFormViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
