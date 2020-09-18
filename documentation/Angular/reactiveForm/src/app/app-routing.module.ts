import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {path: 'signin', pathMatch: 'full', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
