import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './component/list/list.component';
import { DetailComponent } from './component/detail/detail.component';
import { ManagersComponent } from './component/managers/managers.component';


const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'managers', component: ManagersComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
