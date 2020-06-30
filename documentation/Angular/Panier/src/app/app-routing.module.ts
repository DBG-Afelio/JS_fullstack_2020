import { PanierComponent } from './page/panier/panier.component';
import { EshopComponent } from './page/eshop/eshop.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'panier', component: PanierComponent},
  {path: '', component: EshopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
