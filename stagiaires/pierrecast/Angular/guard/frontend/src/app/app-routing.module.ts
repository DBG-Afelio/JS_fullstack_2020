import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { InfoComponent } from './pages/info/info.component';
import { IntroComponent } from './pages/intro/intro.component';


const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'login', component: InfoComponent},
  {path: '', component: IntroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
