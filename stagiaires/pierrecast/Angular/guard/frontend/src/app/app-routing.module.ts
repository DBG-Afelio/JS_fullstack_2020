import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guard/login.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { IntroComponent } from './pages/intro/intro.component';


const routes: Routes = [
  {path: 'admin', component: AdminComponent, canActivate: [LoginGuard]},
  {path: 'login', component: LoginComponent },
  {path: '', component: IntroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
