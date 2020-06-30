import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewBasketComponent } from './page/view-basket/view-basket.component';
import { ViewShopComponent } from './page/view-shop/view-shop.component';

const routes: Routes = [

  { path:'magasin', component: ViewShopComponent },
  { path:'panier', component: ViewBasketComponent },
  { path: 'magasin/:id', component: ViewShopComponent },
  { path:'', redirectTo:'/magasin', pathMatch: 'full' },
  { path:'**', redirectTo:'/magasin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
