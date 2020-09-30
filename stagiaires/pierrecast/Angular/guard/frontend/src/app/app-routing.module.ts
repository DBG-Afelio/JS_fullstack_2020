import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginGuard } from './guard/login.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { IntroComponent } from './pages/intro/intro.component';


const routes: Routes = [
  {path: 'admin', component: AdminComponent, canActivate: [LoginGuard]},
  {path: 'sign-in', component: SignInComponent },
  {path: 'sign-up', component: SignUpComponent },
  {path: '', component: IntroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
