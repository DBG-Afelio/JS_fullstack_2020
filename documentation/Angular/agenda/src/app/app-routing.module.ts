import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './component/list/list.component';
import { DetailsComponent } from './component/details/details.component';


const routes: Routes = [
  {path : 'list', component:ListComponent},
  {path : 'details', component:DetailsComponent},
  {path : '', redirectTo:'/list', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
