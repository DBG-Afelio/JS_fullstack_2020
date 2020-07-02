import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './containers/products/products.component';
import { ProductItemComponent } from './containers/product-item/product-item.component';
import { FavoritesComponent } from './containers/favorites/favorites.component';


const routes: Routes = [
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'products/:id', component: ProductItemComponent
  },
  {
    path: 'new', component: ProductItemComponent
  },
  {
    path: 'favorites', component: FavoritesComponent
  },
  {
    path: '', redirectTo: '/products', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
