import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { SupplierAdminPageComponent } from './pages/supplier-admin-page/supplier-admin-page.component';
import { SupplierFormPageComponent } from './pages/supplier-form-page/supplier-form-page.component';


const routes: Routes = [
  { path : "fournisseur/:id", component: ProductPageComponent },
  { path : "homepage", component: HomePageComponent },
  { path : "produit/:id", component : ProductDetailPageComponent },

  { path : "admin/fournisseur/ajouter", component : SupplierFormPageComponent },
  { path : "admin/fournisseur/modifier/:id", component : SupplierFormPageComponent },
  { path : "admin/fournisseur/archiver/:id", component : SupplierAdminPageComponent },
  { path : "admin/fournisseur/supprimer/:id", component : SupplierAdminPageComponent },

  { path : "admin/fournisseur", component : SupplierAdminPageComponent },
  { path : "admin", component : AdminPageComponent },

  { path : "", redirectTo: "/homepage" , pathMatch: "full"},
  { path : "**", redirectTo: "/homepage", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
