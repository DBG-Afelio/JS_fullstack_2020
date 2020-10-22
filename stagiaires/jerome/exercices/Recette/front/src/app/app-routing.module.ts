import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { UserNotLoggedGuard } from './Guards/user-not-logged.guard';
import { HomeComponent } from './Views/home/home.component';
import { LoginComponent } from './Views/login/login.component';


const routes: Routes = [
  
  {path:"", component: HomeComponent},
  {path:"newRecipe", component: RecipeFormComponent},

  {path:"login", component:LoginComponent, canActivate:[UserNotLoggedGuard]},
  {path:"register", component:LoginComponent, canActivate:[UserNotLoggedGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
