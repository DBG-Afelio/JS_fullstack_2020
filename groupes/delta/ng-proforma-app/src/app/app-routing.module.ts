import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/page/login/login.component';
import { FournisseurComponent } from 'src/page/fournisseur/fournisseur.component';
import { FournisseursComponent } from 'src/page/fournisseurs/fournisseurs.component';


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "fournisseur/:id",
    component: FournisseurComponent
  },
  {
    path: "fournisseurs",
    component: FournisseursComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
