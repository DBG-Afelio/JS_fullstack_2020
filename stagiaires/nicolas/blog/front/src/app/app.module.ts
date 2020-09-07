import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { SetArticleComponent } from './views/set-article/set-article.component';
import { ListArticlesComponent } from './views/list-articles/list-articles.component';
import { ArticleResumeComponent } from './components/article-resume/article-resume.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { DisplayArticleComponent } from './views/display-article/display-article.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [
    AppComponent,
    SetArticleComponent,
    ListArticlesComponent,
    ArticleResumeComponent,
    ListCommentsComponent,
    DisplayArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
