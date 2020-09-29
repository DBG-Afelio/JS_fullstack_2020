import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './pages/intro/intro.component';
import { InfoComponent } from './pages/info/info.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from './guard/login.guard';
import { LoginInterceptorProvider } from './interceptors/login.interceptors';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    InfoComponent,
    AdminComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoginGuard, LoginInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
