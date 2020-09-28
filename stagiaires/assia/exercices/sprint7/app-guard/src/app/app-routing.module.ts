import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInOnlyGuard } from './guards/logged-in-only.guard';
import { LoggedOutOnlyGuard } from './guards/logged-out-only.guard';
import { HomePageComponent } from './pages/homePage/home-page/home-page.component';
import { LoginPageComponent } from './pages/loginPage/login-page/login-page.component';
import { PrivatePageComponent } from './pages/privatePage/private-page/private-page.component';

const routes: Routes = [
    { path : "home", component: HomePageComponent},
    { path : "login", component: LoginPageComponent, canActivate: [LoggedOutOnlyGuard]},
    { path : "private", component: PrivatePageComponent, canActivate: [LoggedInOnlyGuard]},

    { path : "", redirectTo: "/home" , pathMatch: "full"},
    { path : "**", redirectTo: "/home", pathMatch: "full" },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }









    // { path : "historique", component: HistoryPageComponent, canActivate: [LoggedInOnlyGuard] },
    // { path : "admin/commande-du-jour", component: AdminOrderTodayPageComponent, canActivate: [AdminOnlyGuard] },
    //{ path : "admin/fournisseur", component: SupplierAdminPageComponent, canActivate:[AdminOnlyGuard], },