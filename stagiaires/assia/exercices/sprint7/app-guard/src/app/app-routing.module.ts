import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { LoggedInOnlyGuard } from './guards/logged-in-only.guard';
import { LoggedOutOnlyGuard } from './guards/logged-out-only.guard';
import { HomePageComponent } from './pages/homePage/home-page/home-page.component';
import { PrivatePageComponent } from './pages/privatePage/private-page/private-page.component';

const routes: Routes = [
    { path : "home", component: HomePageComponent},
    { path : "sign-up", component: SignUpFormComponent, canActivate: [LoggedOutOnlyGuard]},
    { path : "sign-in", component: SignInFormComponent, canActivate: [LoggedOutOnlyGuard]},
    { path : "private", component: PrivatePageComponent, canActivate: [LoggedInOnlyGuard]},

    { path : "", redirectTo: "/home" , pathMatch: "full"},
    { path : "**", redirectTo: "/home", pathMatch: "full" },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }