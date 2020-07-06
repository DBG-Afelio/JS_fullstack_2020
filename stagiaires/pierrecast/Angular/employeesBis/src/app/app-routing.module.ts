import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewListComponent } from './page/view-list/view-list.component';
import { ViewDetailComponent } from './page/view-detail/view-detail.component';
import { ViewManagerComponent } from './page/view-manager/view-manager.component';


const routes: Routes = [
  { path: "list", component: ViewListComponent },
  { path: "manager", component: ViewManagerComponent },
  { path: "detail/:id", component: ViewDetailComponent },
  { path: "", redirectTo: "/list", pathMatch: "full" },
  { path: "**", redirectTo: "/list", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
