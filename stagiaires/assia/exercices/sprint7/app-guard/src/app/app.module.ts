import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/homePage/home-page/home-page.component';
import { LoginPageComponent } from './pages/loginPage/login-page/login-page.component';
import { PrivatePageComponent } from './pages/privatePage/private-page/private-page.component';
import { LoginFormComponent } from './components/loginForm/login-form/login-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    PrivatePageComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
