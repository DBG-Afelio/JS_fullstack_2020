import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientAdminComponent } from './pages/ingredient-admin/ingredient-admin.component';
import { IntroComponent } from './pages/intro/intro.component';


const routes: Routes = [
  { path: 'admin/ingredient', component: IngredientAdminComponent},
  { path: '', component: IntroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
