import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanierPageComponent } from './pages/panier-page/panier-page.component';
import { EShopPageComponent } from './pages/e-shop-page/e-shop-page.component';


const routes: Routes = [
  { path: 'panier', component: PanierPageComponent },
  { path: 'eshop', component: EShopPageComponent },
  { path: 'eshop/:id', component: EShopPageComponent },
  { path: '', redirectTo:'/eshop', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
