import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { SupplierAdminPageComponent } from './pages/supplier-admin-page/supplier-admin-page.component';
import { SupplierFormPageComponent } from './pages/supplier-form-page/supplier-form-page.component';
import { UserFormPageComponent } from './pages/user-form-page/user-form-page.component';
import { UserAdminPageComponent } from './pages/user-admin-page/user-admin-page.component';


const routes: Routes = [
  { path : "fournisseur/:id", component: ProductPageComponent },
  { path : "homepage", component: HomePageComponent },
  { path : "produit/:id", component : ProductDetailPageComponent },

  { path : "admin/fournisseur/ajouter", component : SupplierFormPageComponent },
  { path : "admin/fournisseur/modifier/:id", component : SupplierFormPageComponent },
  { path : "admin/fournisseur/archiver/:id", component : SupplierAdminPageComponent },
  { path : "admin/fournisseur/supprimer/:id", component : SupplierAdminPageComponent },

  { path : "admin/utilisateur/ajouter", component : UserFormPageComponent },
  { path : "admin/utilisateur/modifier/:id", component : UserFormPageComponent },
  { path : "admin/utilisateur/supprimer/:id", component : UserFormPageComponent },

  
  { path : "admin/fournisseur", component: SupplierAdminPageComponent },
  { path : "admin/utilisateur", component : UserAdminPageComponent },
  { path : "admin", component : AdminPageComponent },
  

 /* { path : "admin/fournisseur/:id", component : SupplierFormPageComponent },*/

  { path : "", redirectTo: "/homepage" , pathMatch: "full"},
  { path : "**", redirectTo: "/homepage", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
