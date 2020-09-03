import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ArticleItemComponent } from './pages/article-item/article-item.component';


const routes: Routes = [
  { path : "article/:id", component:  ArticleItemComponent},
  { path : "homepage", component:  HomepageComponent},
  { path : "", redirectTo: "/homepage" , pathMatch: "full"},
  { path : "**", redirectTo: "/homepage", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
