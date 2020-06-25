import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListCompanentComponent } from './post-list-companent/post-list-companent.component';
import { PostListItemCompenentComponent } from './post-list-item-compenent/post-list-item-compenent.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListCompanentComponent,
    PostListItemCompenentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
