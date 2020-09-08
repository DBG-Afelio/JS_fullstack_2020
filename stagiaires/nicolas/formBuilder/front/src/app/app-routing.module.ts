import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetUserComponent } from './views/set-user/set-user.component';


const routes: Routes = [

  {path:"", component:SetUserComponent},
  {path:"setUser", component:SetUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
