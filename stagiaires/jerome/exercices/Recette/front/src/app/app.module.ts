import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { LoginComponent } from './Views/login/login.component';
import { UserNotLoggedGuard } from './Guards/user-not-logged.guard';
import { UserLoggedGuard } from './Guards/user-logged.guard';
import { HomeComponent } from './Views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeFormComponent,
    UserFormComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UserNotLoggedGuard,
    UserLoggedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }