import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewBasketComponent } from './page/view-basket/view-basket.component';
import { ViewShopComponent } from './page/view-shop/view-shop.component';

const routes: Routes = [
  { path:'panier', component: ViewBasketComponent },
  { path: ':id', component: ViewShopComponent },
  { path:'', component: ViewShopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
