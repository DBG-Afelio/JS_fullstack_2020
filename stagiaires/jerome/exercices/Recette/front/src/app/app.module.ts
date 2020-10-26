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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchIngredientComponent } from './components/search-ingredient/search-ingredient.component';
import { FormComponent } from './Views/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeFormComponent,
    UserFormComponent,
    LoginComponent,
    HomeComponent,
    RecipeListComponent,
    HeaderBarComponent,
    SearchIngredientComponent,
    FormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    UserNotLoggedGuard,
    UserLoggedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
