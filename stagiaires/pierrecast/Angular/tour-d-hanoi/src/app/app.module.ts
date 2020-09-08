import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewBoardComponent } from './page/view-board/view-board.component';
import { BoardComponent } from './component/board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ViewBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
