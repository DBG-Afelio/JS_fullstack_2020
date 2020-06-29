import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanierPageComponent } from './components/panier-page/panier-page.component';
import { EShopPageComponent } from './components/e-shop-page/e-shop-page.component';


const routes: Routes = [
  { path: 'panier', component: PanierPageComponent },
  { path: '', component: EShopPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
