import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './views/home/home-view/home-view.component';


const routes: Routes = [
  { path: "homepage", component: HomeViewComponent},
  { path: "", redirectTo: "/homepage", pathMatch: "full" },
  { path: "**", redirectTo: "/homepage", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
