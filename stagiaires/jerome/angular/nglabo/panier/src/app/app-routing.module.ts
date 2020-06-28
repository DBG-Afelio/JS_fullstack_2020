

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailPanierComponent } from './components/detail-panier/detail-panier.component';
import { ShowCaseComponent } from './components/show-case/show-case.component';


const routes: Routes = [
  {path: 'panier', component: DetailPanierComponent},
  {path: '', component: ShowCaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }