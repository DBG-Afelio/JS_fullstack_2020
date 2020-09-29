import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/homePage/home-page/home-page.component';
import { PrivatePageComponent } from './pages/privatePage/private-page/private-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CredentialsFormComponent } from './components/credentialsForm/login-form/credentials-form.component';
import { AuthenticationPageComponent } from './pages/authenticationPage/authentication-page/authentication-page.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AuthenticationPageComponent,
    PrivatePageComponent,
    CredentialsFormComponent,
    SignInFormComponent,
    SignUpFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
