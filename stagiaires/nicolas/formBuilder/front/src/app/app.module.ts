import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetUserComponent } from './views/set-user/set-user.component';
import { UserFormComponent } from './component/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SetUserComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
