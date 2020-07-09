import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/page/login/login.component';
import { FournisseurComponent } from 'src/page/fournisseur/fournisseur.component';
import { FournisseursComponent } from 'src/page/fournisseurs/fournisseurs.component';
import { MembresComponent } from 'src/page/membres/membres.component';
import { MembreComponent } from 'src/page/membre/membre.component';
import { CommandeComponent } from 'src/page/commande/commande.component';


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
  },
  {
    path: "users",
    component: MembresComponent
  },
  {
    path: "user/:login",
    component: MembreComponent
  },
  {
    path: "commande/:id",
    component: CommandeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }